function mainFadeIn(){
    const fader = document.querySelector('.intro-fade-in');
    fader.classList.toggle('appear');
  }


window.addEventListener('load',
function() {
    mainFadeIn();
}, false);


window.addEventListener('load', function(event) {
  console.log(document.body.clientWidth + ' wide');
});


window.addEventListener("resize", function(event) {
  console.log(document.body.clientWidth + ' wide');
  if(document.body.clientWidth < 700){
    console.log('sunt in mobile');
    const header = document.querySelectorAll('.headeritem');
    header.forEach(item => {
      console.log("item");
    })
}
});