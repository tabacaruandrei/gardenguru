const form = document.getElementById("loginform");
const username = document.getElementById("username");
const pw = document.getElementById("password");

const login = document.getElementById("loginbutton");

const input = document.querySelectorAll("input");


input.forEach(textbox =>{
  console.log(textbox.id);
  if(textbox.id === "username"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkUser();
      checkValid();
    });
    console.log("am intrat in username");
  }

  if(textbox.id === "password"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkPw();
      checkValid();
    });
    console.log("am intrat in pw");
  }
})

function checkUser(){
  const usernameValue = username.value.trim();
  console.log(usernameValue.value);

  if(usernameValue === ""){
    setErrorFor(username, 'Username cannot be blank.');
  }
  
  else if(usernameValue.length < 4){
    setErrorFor(username, 'Username is not long enough.');
  }
  
  else{
    setSuccessFor(username);
  }
}

function checkPw(){
  const pwValue = pw.value.trim();

  if(pwValue === ""){
    setErrorFor(pw, 'Password cannot be blank.');
  }
  
  else if(pwValue.length < 8){
    setErrorFor(pw, 'Password is not long enough.');
  }

  else{
    setSuccessFor(pw);
  }
}

function checkValid(){
  console.log("sunt in login button");
  var k = 0;
  console.log(username.classList);
  console.log(pw.classList);
  if(username.classList.contains('valid') && pw.classList.contains('valid')){
    console.log("am date valide");
    if(!(login.classList.contains('active'))){
      login.classList.toggle('active');
    }
    login.disabled = false;
    console.log(login.classList);
    console.log(login.disabled);
  }
  else{
    console.log("nu am date valide");
    login.disabled = true;
    console.log(login.disabled);
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
}

function setSuccessFor(input){
    input.classList.remove('invalid');
    console.log(input.classList);
    if(!(input.classList.contains('valid'))){
      input.classList.toggle('valid');
    }
}