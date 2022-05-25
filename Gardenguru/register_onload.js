function registerFadeIn(){
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
      fader.classList.toggle('appear');
    });
  }

window.addEventListener('load',
function() {
    registerFadeIn();
}, false);