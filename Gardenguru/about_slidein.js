const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add("appear");
      console.log(entry);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


const buttons = document.querySelectorAll(".button-slide");

const buttonOptions = {
  threshold: 0,
  rootMargin: "0px 0px -130px 0px"
}

const buttonsOnScroll = new IntersectionObserver(function(
  entries,
  buttonsOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add("appear");
      console.log(entry);
      buttonOnScroll.unobserve(entry.target);
    }
  });
},
buttonOptions);

buttons.forEach(button => {
  buttonsOnScroll.observe(button);
});