function mainFadeIn(){
    // console.log('sunt in intro fade in in water');
    const introfaders = document.querySelectorAll('.intro-fade-in');
    introfaders.forEach(fader => {
        // console.log('a mers intro-fade-in-ul pe water');
        fader.classList.toggle('appear');
    })
}


window.addEventListener('load',
function() {
    console.log('sunt in load in water');
    mainFadeIn();
}, false);




const sliders = document.querySelectorAll(".slide-in");

const slideOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const slideOnScroll = new IntersectionObserver(function(
  entries,
  slideOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add("appear");
      console.log(entry.target.parentElement);
      slideOnScroll.unobserve(entry.target);
    }
  });
},
slideOptions);

sliders.forEach(slider => {
  slideOnScroll.observe(slider);
});