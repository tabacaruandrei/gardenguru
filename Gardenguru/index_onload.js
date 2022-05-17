function mainFadeIn(){
    const fader = document.querySelector('.intro-fade-in');
    fader.classList.toggle('appear');
  }

// function descriptionSlideIn(){
//     const slider = document.querySelector('.slide-in');
//     slider.classList.toggle('appear');
// }


window.addEventListener('load',
function() {
    mainFadeIn();
    // descriptionSlideIn();
}, false);