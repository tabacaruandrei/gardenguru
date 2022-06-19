const express = require('express');
const app = express();
const {pool} = require('./dbConfig');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');

const initializePassport = require('./passportConfig');
const { request } = require('express');

initializePassport(passport);

const PORT = process.env.PORT || 4000;




// passport va fi utilizat pentru a stoca sesiunile utilizatorilor logati in cookies, ca sa utilizeze site-ul pentru utilizatori logati







app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false})); // ne permite sa trimitem datele din input boxuri de la frontend la server

app.use(session({
    secret: 'secret', // asta e o cheie pe care vrem sa o pastram secreta; va cripta toate informatiile pe care le stocam in sesiune

    resave: false, // vrem sa resalvam toate variabilele sesiunii daca nu s-a schimbat nimic in timpul sesiunii dpdv al informatiei? false = nu

    saveUninitialized: false // vrem sa salvam datele sesiunii daca nu am introdus date? false = nu
}));

app.use(passport.initialize()); // sends a part of the passport to use in the app
app.use(passport.session());

app.use(flash()); // sa afisam mesajele flash

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));



// app.get('/', (req, res) => {
//     res.render('index', {isLoggedIn: req.isAuthenticated()});
// });

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.get('/users/index', (req, res) => {
    res.render('index');
});

app.get('/users/register', checkAuthenticated, (req, res) => { // verifica daca esti autentificat inainte sa te duca in register/login; ca sa nu mai ai voie sa mai intri in ele
    res.render('register');
});

app.get('/users/login', checkAuthenticated, (req, res) => {
    res.render('login');
});

app.get('/users/about', (req, res) => {
    res.render('about');
});

app.get('/users/top', (req, res) => {
    res.render('top');
});

app.get('/users/tools', (req, res) => {
    res.render('basics/tools');
});

app.get('/users/water', (req, res) => {
    res.render('basics/water');
});

app.get('/users/soil', (req, res) => {
    res.render('basics/soil');
});

app.get('/users/weather', (req, res) => {
    res.render('basics/weather');
});

// app.get('/users/dashboard', checkNotAuthenticated, (req, res) => {
//     res.render('dashboard', {username: req.user.username, isLoggedIn: req.isAuthenticated()});
// });

app.get('/users/myprofile', checkNotAuthenticated, (req, res) => {
    res.render('myprofile', {username: req.user.username, fullname: req.user.fullname, email: req.user.email, number: req.user.number, address: req.user.address});
});

// app.get('/users/index', (req, res) => {
//     res.render('index', {checkAuthenticated});
// });

app.get('/users/logout', (req, res) => {
    // req.logout();
    // res.redirect('/users/login');

    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success_msg', "You have logged out");
        res.redirect('/users/login');
      });
})

app.post('/users/register', async (req, res) => {
    let {username, fullname, email, password, password2} = req.body;

    console.log({
        username,
        fullname,
        email,
        password,
        password2,
    });

    let errors = [];

    if (!username || !fullname || !email || !password || !password2) {
        errors.push({message: 'Please complete all fields.'});
    }

    if (password.length < 8) {
        errors.push({message: 'Password should be at least 8 characters.'});
    }

    if (password != password2) {
        errors.push({message: 'Passwords do not match.'});
    }

    if (errors.length > 0) {
        res.render('register', {errors}); //aici poate veni errors.tail sau cv, ca sa afisam doar o singura eroare; vedem noi, cred ca le afisam pe toate ca la register
    }

    else{
        // am validat formularul de inregistrare
        let hashedPassword = await bcrypt.hash(password, 10) // criptarea parolei e o functie asincrona, de aia punem si async la inceput
        // 10 = de cate ori criptam parola; nr. de runde de criptare a parolei, 10 e un echilibru bun intre timp si complexitate
        console.log(hashedPassword);

        pool.query(
            `SELECT * FROM users
              WHERE username = $1`,
            [username],
            (err, results) => {
              if (err) {
                // console.log(err);
                throw err;
              }
              console.log('reaches here');
              console.log(results.rows);

              if(results.rows.length > 0) {
                  errors.push({message: 'Username is already registered.'});
                  res.render('register', {errors});
              }
              else{
                pool.query(
                    `SELECT * FROM users
                      WHERE email = $1`,
                    [email],
                    (err, results) => {
                      if (err) {
                        // console.log(err);
                        throw err;
                      }
                      console.log('reaches here');
                      console.log(results.rows);

                      if(results.rows.length > 0) {
                          errors.push({message: 'Email is already registered.'});
                          res.render('register', {errors});
                      }
                      else{
                        pool.query(
                            `SELECT * FROM users
                              WHERE password = $1`,
                            [hashedPassword],
                            (err, results) => {
                              if (err) {
                                // console.log(err);
                                throw err;
                              }
                              console.log('reaches here');
                              console.log(results.rows);

                              if(results.rows.length > 0) {
                                  errors.push({message: 'Password already exists.'});
                                  res.render('register', {errors});
                              }
                              else {
                                pool.query(
                                    `INSERT INTO users (username, fullname, email, password)
                                    VALUES ($1, $2, $3, $4)
                                    RETURNING id, password`,
                                    [username, fullname, email, hashedPassword], // sa nu uitam sa introducem parola criptata
                                    (err, results) => {
                                        if (err) {
                                            throw err;
                                        }
                                        console.log(results.rows);
                                        req.flash('success_msg', 'You are now registered. Please log in')    // o sa trecem un mesaj flash in pagina de redirect
                                        res.redirect('/users/login')
                                    }
                                )
                              }
                            }
                        )
                    }
                  }
                )
              }
            }
        )
    }
});

app.post('/users/myprofile', async (req, res) => {
    console.log('am dat submit la schimbari');
});

app.post('/users/login', passport.authenticate('local', {
    successRedirect: '/users/myProfile',
    failureRedirect: '/users/login',
    failureFlash: true
})) // local am definit strategia in passportConfig

function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect('/users/myProfile'); // daca utilizatorul e autenticat, va fi redirectionat la dashboard
    }
    next();
}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/login');
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.use((req, res, next) => {
    // res.status(404).send("Sorry can't find that!");
    // res.redirect('/users/login');
    res.status(404).redirect('/users/404');
});