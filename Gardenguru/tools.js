function mainFadeIn(){
    // console.log('sunt in intro fade in in tools');
    const introfaders = document.querySelectorAll('.intro-fade-in');
    introfaders.forEach(fader => {
        // console.log('a mers intro-fade-in-ul pe tools');
        fader.classList.toggle('appear');
    })
}

// function descriptionSlideIn(){
//     const slider = document.querySelector('.slide-in');
//     slider.classList.toggle('appear');
// }


window.addEventListener('load',
function() {
    console.log('sunt in load in tools');
    mainFadeIn();
    // descriptionSlideIn();
}, false);











const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");
var i = 0;

const slideOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const slideOnScroll = new IntersectionObserver(function(
  entries,
  slideOnScroll
) {
  i = 0;
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else if(entry.target.classList.contains('tooldescription-from-left')){
      console.log('sunt in tooldescription-from-left'); 
      toolsSlideIn(entry, i);
      i = i + 1;
      slideOnScroll.unobserve(entry.target);
    }
    else{
      entry.target.classList.add("appear");
      console.log(entry.target);
      console.log(entry.target.parentElement);
      slideOnScroll.unobserve(entry.target);
    }
  });
  i = 0;
},
slideOptions);

sliders.forEach(slider => {
  slideOnScroll.observe(slider);
});

function toolsSlideIn(entry, index){
    setTimeout(
      () => {
        entry.target.classList.add("appear");
      }, index*250 + 50 );
  }



const fadeOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
}

const fadeOnScroll = new IntersectionObserver(function(
    entries,
    fadeOnScroll
) {
  i = 0;
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        // else if(entry.target.classList.contains('tooldescription-from-top')){
        //     console.log('sunt in tooldescription-from-top'); 
        //     toolsFadeIn(entry, i);
        //     i = i + 1;
        //     slideOnScroll.unobserve(entry.target);
        // }
        else{
            entry.target.classList.add("appear");
            console.log(entry.target.parentElement);
            fadeOnScroll.unobserve(entry.target);
        }
    });
  i = 0;
},
fadeOptions);

faders.forEach(fader => {
    fadeOnScroll.observe(fader);
});

function toolsFadeIn(entry, index){
    console.log(entry.target);
    entry.target.
    setTimeout(
      () => {
        entry.target.classList.add("appear");
      }, index*500 + 50 );
  }
