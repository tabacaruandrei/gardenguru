const form = document.getElementById("loginform");
const user = document.getElementById("user");
const firstName = document.getElementById("firstname");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const pw2 = document.getElementById("verifypassword");

const login = document.getElementById("loginbutton");

const input = document.querySelectorAll("input");


// var tds = document.getElementsByClassName('inputlogin');
// console.log(tds.textContent.value);

  // for (var i = 0; i < tds.length; i++) {
  //     console.log(tds[i].textContent.value);
  // }


// myInput.addEventListener('change', e => {
//   console.log('am facut o schimbare in input');
// });




input.forEach(textbox =>{
  // console.log(textbox.id);
  // if(textbox.parentElement.get)
  if(textbox.id === "user"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkUser();
      checkValid();
    });
    console.log("am intrat in user");
  }
  
  if(textbox.id === "firstname"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkName();
      checkValid();
    });
    console.log("am intrat in firstName");
  }

  if(textbox.id === "email"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkEmail();
      checkValid();
    });
    console.log("am intrat in email");
  }

  if(textbox.id === "password"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkPw();
      checkValid();
    });
    console.log("am intrat in pw");
  }

  if(textbox.id === "verifypassword"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkPw2();
      checkValid();
    });
    console.log("am intrat in pw2");
  }

  // if(textbox.id === "loginbutton"){
  //   textbox.addEventListener('input', e => {
  //     e.preventDefault();
  //     checkValid();
  //   });
  //   // checkValid();
  //   // if(firstName.classList.contains('valid')){
  //   //   console.log("datele merg");
  //   // }
  //   console.log("verific datele");
  // }
  // textbox.addEventListener('input', e => {
  //   e.preventDefault();
  //   checkInputs();
  // });
})

// function updateValue(e) {
//   log.textContent = e.target.value;
//   console.log(e);
// }

// form.addEventListener

// function checkInputs(){
//   const userValue = user.value.trim();
//   const firstNameValue = firstName.value.trim();
//   const emailValue = email.value.trim();
//   const pwValue = pw.value.trim();
//   const pw2Value = pw2.value.trim();

//   checkUser(userValue);
//   checkName(firstNameValue);
//   checkEmail(emailValue);
//   checkPw(pwValue);
//   checkPw2(pw2Value);
// }

function checkUser(){
  const userValue = user.value.trim();
  console.log(userValue.value);

  if(userValue === ""){
    setErrorFor(user, 'Username cannot be blank.');
  }
  
  else if(userValue.length < 4 || userValue.length > 16 ){
    // console.log(userValue.length < 4 || userValue.length > 16 )
    setErrorFor(user, 'Username is not long enough.');
  }
  
  else{
    setSuccessFor(user);
  }
}

function checkName(){
  console.log("sunt in checkName");
  const firstNameValue = firstName.value.trim();

  if(firstNameValue === ""){
    setErrorFor(firstName, 'First name cannot be blank.')
  }

  // else{
  //   console.log(firstNameValue);
  //   console.log(firstNameValue.value);
  //   console.log(/^[A-Z][a-z]+$/.test(firstNameValue.value));
  // }
  
  else if(/^[A-Z][a-z]+$/.test(firstNameValue)){
    console.log('true');
    setSuccessFor(firstName);
  }
  else{
    console.log('false');
    setErrorFor(firstName, 'First name incorrect.');
  }
}

function checkEmail(){
  const emailValue = email.value.trim();

  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)){
    setSuccessFor(email);
  }

  else{
    setErrorFor(email, 'Email address not correct.')
  }
}

function checkPw(){
  const pwValue = pw.value.trim();

  if(pwValue === ""){
    //
      setErrorFor(pw, 'Password cannot be empty.');
    }
  
    else if(pwValue.length < 8 || pwValue.length > 30){
    //
    setErrorFor(pw, 'Password is not long enough.');
    }
  
    else if(pwValue.search(/\d/) === -1){
    // cifra
    setErrorFor(pw, 'Password must contain one digit.');
    }
  
    else if(pwValue.search(/[a-zA-Z]/) === -1){
    // majuscula / litera mica
    setErrorFor(pw, 'Password must contain one big letter and one small letter.');
    }
  
    // else if(pwValue.search(/\?!#\$%\^&\*\(\)/) == -1){
    // // cifra
    // setErrorFor(pw, 'Password must contain a special character.');
    // }

    // else if(pwValue.search(/\?!#$%&*/) == -1){
    //   // cifra
    //   setErrorFor(pw, 'Password must contain a special character.');
    //   }
  
    else{
      setSuccessFor(pw);
    }
}

function checkPw2(){
  var pwValue = pw.value.trim();
  var pw2Value = pw2.value.trim();

  if(pw.value != pw2.value){
  //
    setErrorFor(pw2, 'Passwords do not match.');
  }

  else{
    setSuccessFor(pw2);
  }
}



function checkValid(){
  console.log("sunt in login button");
  var k = 0;
  console.log(user.classList);
  console.log(firstName.classList);
  console.log(email.classList);
  console.log(pw.classList);
  console.log(pw2.classList);
  if(user.classList.contains('valid') && firstName.classList.contains('valid') && email.classList.contains('valid') && pw.classList.contains('valid') && pw2.classList.contains('valid')){
    console.log("am date valide");
    if(!(login.classList.contains('active'))){
      login.classList.toggle('active');
    }
    login.disabled = false;
    console.log(login.classList);
  }
  else{
    console.log("nu am date valide");
    login.disabled = true;
    if(login.classList.contains('active')){
      login.classList.remove('active');
    }
    console.log(login.classList);
  }
}




function setErrorFor(input, message){
  // input.classList.toggle('invalid');
  //   setTimeout(() => {input.classList.toggle('invalid');
  //   const parent = input.parentElement;
  //   const error = parent.querySelector(".loginerror");
  //   error.style.visibility = "visible";
  //   error.innerText = message;
  // }, 500 );

  input.classList.remove('valid');
  console.log(input.classList);
  if(!(input.classList.contains('invalid'))){
    input.classList.toggle('invalid');
  }
  const parent = input.parentElement;
  const error = parent.querySelector(".loginerror");
  error.style.visibility = "visible";
  error.innerText = message;



  // error.classList.remove('appear');
  // console.log(error.classList);
  if(!(error.classList.contains('appear'))){
    error.classList.toggle('appear');
  }



  // console.log("au trecut 2 secunde");
//   debounce(function(e) {
//     console.log("am intrat in functie");
// }, 2000);
}

function setSuccessFor(input){
  input.classList.remove('invalid');
  console.log(input.classList);
  if(!(input.classList.contains('valid'))){
    input.classList.toggle('valid');
  }
  // if(input.classList.)
  // setTimeout(() => {input.classList.toggle('valid');}, 500 );
  const parent = input.parentElement;
  const error = parent.querySelector(".loginerror");
  error.style.visibility = "hidden";
  if(error.classList.contains('appear')){
    error.classList.remove('appear');
  }
}





function checkValid(){
  console.log("sunt in login button");
  var k = 0;
  if(user.classList.contains('valid') && firstName.classList.contains('valid') && email.classList.contains('valid') && pw.classList.contains('valid') && pw2.classList.contains('valid')){
    login.disabled = false;
    if(!(login.classList.contains('active'))){
      login.classList.toggle('active');
    }
  }
  else{
    console.log("nu am date valide");
    if(login.classList.contains('active')){
      login.classList.remove('active');
    }
    login.disabled = true;
  }
}