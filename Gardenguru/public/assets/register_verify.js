const form = document.getElementById("loginform");
const username = document.getElementById("username");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const pw2 = document.getElementById("password2");

const login = document.getElementById("loginbutton");

const input = document.querySelectorAll("input");





input.forEach(textbox =>{
  if(textbox.id === "username"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkUser();
      checkValid();
    });
    console.log("am intrat in username");
  }
  
  if(textbox.id === "fullname"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkName();
      checkValid();
    });
    console.log("am intrat in fullName");
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

  if(textbox.id === "password2"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkPw2();
      checkValid();
    });
    console.log("am intrat in pw2");
  }
})


function checkUser(){
  const usernameValue = username.value.trim();
  console.log(usernameValue.value);

  if(usernameValue === ""){
    setErrorFor(username, 'Username cannot be blank.');
  }
  
  else if(usernameValue.length < 4){
    setErrorFor(username, 'Username must be at least 4 characters long.');
  }

  else if(usernameValue.length > 16 ){
    setErrorFor(username, 'Username length cannot exceed 16 characters.');
  }
  
  else{
    setSuccessFor(username);
  }
}

function checkName(){
  console.log("sunt in checkName");
  const fullNameValue = fullName.value.trim();

  if(fullNameValue === ""){
    setErrorFor(fullName, 'First name cannot be blank.')
  }
  
  else if(/^[A-Z][a-z]+$/.test(fullNameValue)){
    console.log('true');
    setSuccessFor(fullName);
  }
  else{
    console.log('false');
    setErrorFor(fullName, 'First name incorrect.');
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
  
    else if(pwValue.length < 8){
    setErrorFor(pw, 'Password must be at least 8 characters long.');
    }

    else if(pwValue.length > 30){
      setErrorFor(pw, 'Password length cannot exceed 30 characters.');
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
  console.log(username.classList);
  console.log(fullName.classList);
  console.log(email.classList);
  console.log(pw.classList);
  console.log(pw2.classList);
  if(username.classList.contains('valid') && fullName.classList.contains('valid') && email.classList.contains('valid') && pw.classList.contains('valid') && pw2.classList.contains('valid')){
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
  if(username.classList.contains('valid') && fullName.classList.contains('valid') && email.classList.contains('valid') && pw.classList.contains('valid') && pw2.classList.contains('valid')){
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
