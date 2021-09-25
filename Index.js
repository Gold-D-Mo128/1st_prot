// function for the resposive navigation bar as refrenced in the index.html file
function navSlide(){
    const burger = document.querySelector('.burger');
    const navMenue = document.querySelector('.nav-bar-links');
    const navMenueItems = document.querySelectorAll('.nav-bar-links li');

    // adding an event listener the burger div which is click
    burger.addEventListener('click',()=>{ 
      // toggling the following class which is styled on the css file
      navMenue.classList.toggle('nav-bar-links-active')
      // itirating through a sibling element
      navMenueItems.forEach((item, i)=> {
        // reseting the animation the navigation links when already applied
        if(item.style.animation){
          item.style.animation = ''
        }
        else{
          item.style.animation = `navLinkFade 0.5s ease forwards  ${i/7 + 0.6}s`
        }
      })
      // burger animation
      burger.classList.toggle('toggle')
    })
  }
  
  navSlide()