const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");
var i = 0;

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
}

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else if(entry.target.parentElement.className === "containerIndexBasics"){
      // console.log(entry.target);
      console.log(entry.target.parentElement.children[i]);
      basicsSlideIn(entry, i);
      i = i + 1;
      appearOnScroll.unobserve(entry.target);
    }
    else{
      entry.target.classList.add("appear");
      console.log(entry.target.parentElement);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

function basicsSlideIn(entry, index){
  setTimeout(
    () => {
      entry.target.classList.add("appear");
    }, i*150 + 50 );
}













