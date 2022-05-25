function mainFadeIn(){
    const fader = document.querySelector('.intro-fade-in');
    fader.classList.toggle('appear');
  }


window.addEventListener('load',
function() {
    mainFadeIn();
}, false);