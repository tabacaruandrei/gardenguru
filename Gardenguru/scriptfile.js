
function getCurrentYear(){
  const year = new Date();
  document.getElementById("footeryear").innerHTML = year.getFullYear();
}

// window.onload = function(){
//   getCurrentYear();
// }

window.addEventListener('load', 
  function() { 
    getCurrentYear();
  }, false);