const name = document.getElementById("profilename");
const email = document.getElementById("profileemail");
const number = document.getElementById("profilenumber");
const address = document.getElementById("profileaddress");

const save = document.getElementById("profilesave");
const cancel = document.getElementById("profilecancel");
const modify = document.getElementById("profilemodify");
const changepw = document.getElementById("profilechangepw");
const logout = document.getElementById("profilelogout");

const input = document.querySelectorAll(".AD_fieldContentBox");
console.log(input);

const fields = document.querySelectorAll(".AD_fieldContent");
console.log(fields);

const buttons = document.querySelectorAll(".Button");
// const fieldValues = [];





// myInput.addEventListener('change', e => {
//   console.log('am facut o schimbare in input');
// });



// fields.forEach(field => {
//   console.log(field);
//   field.querySelector('span').classList.toggle('modify');
//   field.querySelector('input').classList.toggle('modify');
//   console.log(field.querySelector('span').classList);
//   // field.querySelector('span').classList.remove('modify');
//   // console.log(field.querySelector('span').classList);
// });

// buttons.forEach(button => {
//   console.log(button);
//   button.classList.toggle('modify');
//   console.log(button.classList);
//   // field.querySelector('span').classList.remove('modify');
//   // console.log(field.querySelector('span').classList);
// });





input.forEach(textbox =>{
  console.log(textbox.id);
  // modifyAccount();

  if(textbox.id === "profilename"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkName();
      checkValid();
    });
    console.log("am intrat in user");
  }

  if(textbox.id === "profileemail"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkEmail();
      checkValid();
    });
    console.log("am intrat in pw");
  }

  if(textbox.id === "profilenumber"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkNumber();
      checkValid();
    });
    console.log("am intrat in user");
  }

  if(textbox.id === "profileaddress"){
    textbox.addEventListener('input', e => {
      e.preventDefault();
      checkAddress();
      checkValid();
    });
    console.log("am intrat in pw");
  }

});


function checkName(){
    console.log("sunt in checkName");
    const nameValue = name.value.trim();
  
    if(nameValue === ""){
      setErrorFor(name, 'First name cannot be blank.')
    }

    else if(/^([A-Z][a-z]+(\s)*)+$/.test(nameValue)){
      console.log('true');
      setSuccessFor(name);
    }
    else{
      console.log('false');
      setErrorFor(name, 'First name incorrect.');
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

function checkNumber(){
    const numberValue = number.value.trim();
    console.log(numberValue.value);

    if(/^[0-9]*$/.test(numberValue)){
        console.log('true');
        setSuccessFor(number);
    }
    
    else{
      setErrorFor(number, 'Phone number can only contain digits.');
    }
  }
  
function checkAddress(){
  const addressValue = address.value.trim();
  
  if(!(/^([A-Z][a-z]+(\s)*)+$/.test(addressValue))){
    setErrorFor(address, 'Address is not correct.');
  }
  
  else{
    setSuccessFor(address);
  }
}

function checkValid(){
  console.log("sunt in save button");
  var k = 0;
  console.log(name);
  console.log(email);
  if(name.classList.contains('valid') && email.classList.contains('valid')){
    console.log("am date valide");
    // if(!(save.classList.contains('active'))){
    //   save.classList.toggle('active');
    // }
    save.disabled = false;
    console.log(save.classList);
  }
  else{
    console.log("nu am date valide");
    save.disabled = true;
    // if(save.classList.contains('active')){
    //   save.classList.remove('active');
    // }
    console.log(save.classList);
  }
}

function setErrorFor(input, message){
  console.log(input.classList);
  if(input.classList.contains('valid')){
    input.classList.remove('invalid');
  }
  if(!(input.classList.contains('invalid'))){
    input.classList.toggle('invalid');
  }
}

function setSuccessFor(input){
  console.log(input.classList);
  if(input.classList.contains('invalid')){
    input.classList.remove('invalid');
  }
  if(!(input.classList.contains('valid'))){
    input.classList.toggle('valid');
  }
}












save.onclick = function() {
  console.log('am dat click pe save');
  if(save.disabled === false){
    console.log('am intrat in save verify');
    input.forEach(textbox =>{
      console.log(textbox.id);
      // const nameValue = name.value.trim();
      // const emailValue = email.value.trim();
      // const numberValue = number.value.trim();
      // const addressValue = address.value.trim();

      console.log(textbox.parentElement.querySelector('span').classList);
      console.log(textbox.value.trim());
      textbox.parentElement.querySelector('span').innerHTML = textbox.value.trim();
      textbox.parentElement.querySelector('span').classList.remove('modify');
      textbox.classList.remove('modify');
      // textbox.parentElement.querySelector('span').classList.remove('modify');
      // textbox.parentElement.getElementsByClassName('AD_fieldContentText').classList.remove('modify');
    })
    console.log('am iesit din inputuri');
    buttons.forEach(button => {
      console.log(button);
      button.classList.remove('modify');
      console.log(button.classList);
      // field.querySelector('span').classList.remove('modify');
      // console.log(field.querySelector('span').classList);
    });
  }
}

cancel.onclick = function() {
  console.log('am dat click pe cancel');
  input.forEach(textbox =>{
    console.log(textbox.id);
      // const nameValue = name.value.trim();
      // const emailValue = email.value.trim();
      // const numberValue = number.value.trim();
      // const addressValue = address.value.trim();

      console.log(textbox.parentElement.querySelector('span').classList);
      textbox.parentElement.querySelector('span').classList.remove('modify');
      textbox.classList.remove('modify');
  })
  buttons.forEach(button => {
    console.log(button);
    button.classList.remove('modify');
    console.log(button.classList);
    // field.querySelector('span').classList.remove('modify');
    // console.log(field.querySelector('span').classList);
  });
}


// if()
modify.onclick = function() {
  console.log('am dat click pe modify');
  input.forEach(textbox =>{
    console.log(textbox.id);
      // const nameValue = name.value.trim();
      // const emailValue = email.value.trim();
      // const numberValue = number.value.trim();
      // const addressValue = address.value.trim();

      console.log(textbox.parentElement.querySelector('span').classList);
      textbox.parentElement.querySelector('span').classList.toggle('modify');
      textbox.classList.toggle('modify');
  })
  buttons.forEach(button => {
    console.log(button);
    button.classList.toggle('modify');
    console.log(button.classList);
    // field.querySelector('span').classList.remove('modify');
    // console.log(field.querySelector('span').classList);
  });
}