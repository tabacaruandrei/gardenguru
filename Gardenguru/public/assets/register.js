
    user = document.getElementById('user');
    email = document.getElementById('email');
    password = document.getElementById('password');
    password2 = document.getElementById('password2');
    input = document.querySelectorAll('input');

    

    // console.log({
    //     name,
    //     email,
    //     password,
    //     password2,
    // });







    input.forEach(textbox =>{
        if(textbox.id === "user"){
          textbox.addEventListener('input', e => {
            e.preventDefault();
            checkUser();
          });
          console.log("am intrat in user");
        }
        
        if(textbox.id === "email"){
          textbox.addEventListener('input', e => {
            e.preventDefault();
            checkEmail();
          });
          console.log("am intrat in email");
        }
      
        if(textbox.id === "password"){
          textbox.addEventListener('input', e => {
            e.preventDefault();
            checkPassword();
          });
          console.log("am intrat in password");
        }
      
        if(textbox.id === "password2"){
          textbox.addEventListener('input', e => {
            e.preventDefault();
            checkPassword2();
          });
          console.log("am intrat in password2");
        }
      })
      
      
      function checkUser(){
        const userValue = user.value.trim();
        console.log(userValue);
      }

      function checkEmail(){
        const emailValue = email.value.trim();
        console.log(emailValue);
      }

      function checkPassword(){
        const passwordValue = password.value.trim();
        console.log(passwordValue);
      }

      function checkPassword2(){
        const password2Value = password2.value.trim();
        console.log(password2Value);
      }










    // let errors = [];

    // if (!name || !email || !password || !password2) {
    //     errors.push({message: 'Please complete all fields.'});
    // }

    // if (password.length < 8) {
    //     errors.push({message: 'Password should be at least 8 characters.'});
    // }

    // if (password != password2) {
    //     errors.push({message: 'Passwords do not match.'});
    // }