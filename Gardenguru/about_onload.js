function aboutFadeIn(){
    const fader = document.querySelector('.fade-in');
    fader.classList.toggle('appear');
  }

window.addEventListener('load',
function() {
    aboutFadeIn();
}, false);