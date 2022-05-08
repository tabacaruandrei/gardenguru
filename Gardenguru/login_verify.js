function verifyUser(){
    var user = document.getElementById("username");
  
    if(user = ""){
    //
      return false;
    }
  
    else if(user.length < 4 || user.length > 16 ){
    //
      return false;
    }
  
    else{
      alert("Username is correct.")
    }
  }
  
  function verifyFirstName(){
    var firstName = document.getElementById("firstname");
  
    if(firstName = ""){
    //
      return false;
    }
  
    else return /[A-Z][a-z]*/.test(firstName);
  }
  
  function verifyLastName(){
    var lastName = document.getElementById("lastname");
  
    if(lastName = ""){
    //
      return false;
    }
  
    else return /[A-Z][a-z]*/.test(lastName);
  }
  
  // function verifyEmail(){
  //   var email = document.getElementById("email");
  //   if(user = ""){
  //   //
  //   }
  // }
  
  function verifyPassword(){
    var pw = document.getElementById("password");
  
    if(pw = ""){
    //
      return false;
    }
  
    else if(pw.length < 8 || pw.length > 30){
    //
      return false;
    }
  
    else if(pw.search(/\d/) == -1){
    // cifra
      return false;
    }
  
    else if(pw.search(/[a-zA-Z]/) == -1){
    // majuscula / litera mica
      return false;
    }
  
    else if(pw.search(/\d/) == -1){
    // cifra
      return false;
    }
  
    else{
      alert("Password is correct.")
    }
  }
  
  function verifySecondPassword(){
    var pw = document.getElementById("password");
    var pw2 = document.getElementById("verifypassword");
  
    if(pw.value != pw2.value){
    //
      return false;
    }
  
    else{
      alert("Other password is matching.");
    }
  }