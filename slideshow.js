"use strict";

/******************************** 
DOM elements
 ***************************************/

// Select all slides
const $slides = document.querySelectorAll(".slide");
// select next slide button
const $nextSlide = document.querySelector(".btn-next");
// select next slide button
const $prevSlide = document.querySelector(".btn-prev");
//select all dots indexes
const $dots = document.querySelectorAll(".dots>i");
//console.log($dots);

/******************************** 
 variables globales
 ***************************************/
// current slide counter
let curSlide = 0;
// maximum number of $slides
let maxSlide = $slides.length - 1;


// loop through $slides and set each $slides translateX
$slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const cargarIndices = () => {
    $dots.forEach((dot, index) => {
        //console.log(dot, curSlide);
        if(index === curSlide){        
            dot.classList.add("fa-dot-circle");        
        }else{
            dot.classList.remove("fa-dot-circle");
        }
    })
};
cargarIndices();

/******************************** 
 addEventListener
 ***************************************/
// add event listener and navigation functionality
$nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //   move slide by -100%
  $slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  cargarIndices();
});

// add event listener and navigation functionality
$prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  //   move slide by 100%
  $slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  cargarIndices();
});

//add event listener for the dots navigation
$dots.forEach((dot) => {
    //console.log(dot);
    dot.addEventListener("click", (e) => {
        let idActual = e.target.id;
        let idActualNumber = parseInt(idActual.slice(-1));
        //console.log(idActualNumber, typeof idActualNumber);
        if (idActualNumber !== curSlide){
            //console.log("indice distinto a la actual diapositiva");
            curSlide = idActualNumber;
            //   move slide by 100%
            $slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });   
            cargarIndices();
        }else{
            //console.log("indice igual a la actual diapositiva");
        }
    });
})



