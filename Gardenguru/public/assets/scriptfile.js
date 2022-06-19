
function getCurrentYear(){
  const year = new Date();
  document.getElementById("footeryear").innerHTML = year.getFullYear();
}


window.addEventListener('load',
  function() {
    getCurrentYear();
  }, false);


const faderFooter = document.querySelector('.footer-fade-in');

const fadeFooterOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
}

const fadeFooterOnScroll = new IntersectionObserver(function(
  entries,
  fadeFooterOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      console.log(entry.target);
      entry.target.classList.add("appear");
      console.log(entry.target.parentElement);
      fadeFooterOnScroll.unobserve(entry.target);
    }
  });
},
fadeFooterOptions);

fadeFooterOnScroll.observe(faderFooter);