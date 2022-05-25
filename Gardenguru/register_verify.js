const form = document.getElementById("loginform");
const user = document.getElementById("user");
const firstName = document.getElementById("firstname");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const pw2 = document.getElementById("verifypassword");

const login = document.getElementById("loginbutton");

const input = document.querySelectorAll("input");





input.forEach(textbox =>{
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
})


function checkUser(){
  const userValue = user.value.trim();
  console.log(userValue.value);

  if(userValue === ""){
    setErrorFor(user, 'Username cannot be blank.');
  }
  
  else if(userValue.length < 4 || userValue.length > 16 ){
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
      setErrorFor(pw, 'Password cannot be empty.');
    }
  
    else if(pwValue.length < 8 || pwValue.length > 30){
    setErrorFor(pw, 'Password is not long enough.');
    }
  
    else if(pwValue.search(/\d/) === -1){
    setErrorFor(pw, 'Password must contain one digit.');
    }
  
    else if(pwValue.search(/[a-zA-Z]/) === -1){
    setErrorFor(pw, 'Password must contain one big letter and one small letter.');
    }
  
    else{
      setSuccessFor(pw);
    }
}

function checkPw2(){
  var pwValue = pw.value.trim();
  var pw2Value = pw2.value.trim();

  if(pw.value != pw2.value){
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
  input.classList.remove('valid');
  console.log(input.classList);
  
  if(!(input.classList.contains('invalid'))){
    input.classList.toggle('invalid');
  }
  
  const parent = input.parentElement;
  const error = parent.querySelector(".loginerror");
  error.style.visibility = "visible";
  error.innerText = message;

  if(!(error.classList.contains('appear'))){
    error.classList.toggle('appear');
  }
}

function setSuccessFor(input){
  input.classList.remove('invalid');
  console.log(input.classList);
  if(!(input.classList.contains('valid'))){
    input.classList.toggle('valid');
  }
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
