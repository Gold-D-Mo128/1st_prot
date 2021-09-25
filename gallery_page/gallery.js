var elements = document.getElementsByClassName("column");
const columns = document.querySelectorAll('.row .column');

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "1 100%";
  }
}

// Two images side by side
function two() {
  columns.forEach((element, index)=>{
    element.style.flex = "50%"
  })
}

// Four images side by side
function four() {
  columns.forEach((element, index)=>{
    element.style.flex = "1 1 25%"
  })
}

// // Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  // itirating through the button and adding an  event listener to every one of them
  btns[i].addEventListener("click", function() {
    // toggling the button with the class name active
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}