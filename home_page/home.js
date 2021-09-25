

const locations = document.querySelectorAll(".location")

// using the javascript built-in function foreach to itirate through elements
locations.forEach((element,i) => {
  // targting the child element of the selected element
  const locDis = document.querySelector("p")
  element.addEventListener("click",()=>{
    // toggling the show class-name
    element.classList.toggle("show")
  })
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) =>{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) =>{
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // when the slide index reach the last slide, reset
  if (n > slides.length) {slideIndex = 1}
  // if we are going backwards and react the first slide, then we set the slide index to the last index which is the length of the array 
  if (n < 1) {slideIndex = slides.length}
  // toggling the slides to show on the main div
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // toggling the active button
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
 
}




