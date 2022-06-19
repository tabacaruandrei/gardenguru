const LocalStrategy = require('passport-local').Strategy;
const { pool } = require('./dbConfig');
const bcrypt = require('bcrypt');


function initialize(passport){
    const authenticateUser = (username, password, done) => {
        pool.query(
            `SELECT * from users
            where username = $1`,
            [username],
            (err, results) => {
                if (err) {
                    throw err;
                }
                console.log(results.rows);

                if(results.rows.length > 0){
                    const user = results.rows[0]; // rezultatele depind de primul rezultat din lista, ca un vector stocat in memorie, unde stochezi doar prima pozitie si nr de pozitii in total, care se afla dupa in memorie consecutiv

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err){
                            throw err;
                        }

                        if(isMatch){
                            return done(null, user); // functia done ia ca parametri: primul e eroarea(null), al doilea e utilizatorul; functia va returna utilizatorul si il va stoca in session cookie object ca sa il folosim in aplicatie
                        }

                        else{
                            return done(null, false, {message: 'Password is not correct.'});
                        }
                    })
                }

                else {
                    return done(null, false, {message: 'Account is not registered.'});
                }
            }
        )
    }

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, authenticateUser)
    );

    passport.serializeUser((user, done) => done(null, user.id)); // acest passport va lua user-ul si ii va stoca id-ul in user session

    passport.deserializeUser((id, done) => {
        pool.query(
            `SELECT * from users
            where id = $1`,
            [id],
            (err, results) => {
                if(err){
                    throw err;
                }

                return done(null, results.rows[0]); // passport deserializer-ul va utiliza id pentru a lua informatiile utilizatorului din baza de date a utilizatorilor si pentru a stoca obiectele intregi in sesiune cand navigam pagina noastra din aplicatie
            }
        )
    })
};


module.exports = initialize; // voi exporta functia initialize efectiv din acest fisier