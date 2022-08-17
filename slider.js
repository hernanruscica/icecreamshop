console.log("desde js");

let slideLast = 0;
let slideIndex = 0;
let slideQuantity = 4;

const slider = document.querySelector("#slider"); 
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const $dots = document.querySelectorAll(".dots>i");



const loadDots = () => {
    $dots.forEach((dot, index) => {
        //console.log(dot, curSlide);
        if(index === slideIndex){        
            dot.classList.add("fa-dot-circle");        
        }else{
            dot.classList.remove("fa-dot-circle");
        }
    })
};
loadDots();


//indexes = 0, 1, 2, 3, 4 .... positions= 0, -100, -200, -300, -400
const moverSlide = (index, last) => {
    let marginLeft = (index === 0) ? index * 100 + '%' : '-' + index * 100 + '%';
    slider.style.marginLeft = marginLeft;
    slider.style.transition = "all 0.5s"; 
    
    if (index > last + 1) {
        console.log("de 0 a ultimo");   
        slider.style.opacity = 0;        
        setTimeout(function() {
            slider.style.opacity = 1;                    
        }, 500);
    }
    if (index < last - 1) {
        console.log("de ultimo a 0");
        slider.style.opacity = 0;        
        setTimeout(function() {
            slider.style.opacity = 1;        
        }, 500);
    }
    loadDots();
    //console.log(marginLeft);    
}
//moverSlide(1);
moverSlide(slideIndex, slideLast);

const increaseSlide = (index, quantity) => {
    index += 1;
    index = index %  quantity;
    //console.log(index);
    return index;
}
//increaseSlide(3, slideQuantity);

const decreaseSlide = (index, quantity) => {
    index = (index - 1 >= 0 ) ? index - 1 : quantity - 1 ;        
    //console.log(index);
    return index;
}
//decreaseSlide(0, slideQuantity);

btnRight.addEventListener('click', function() {
    slideLast = slideIndex;
    slideIndex = increaseSlide(slideIndex, slideQuantity);
    moverSlide(slideIndex, slideLast);
    //console.clear();
    console.log('indice: ', slideIndex);    
    });    
btnLeft.addEventListener('click', function(){
    slideLast = slideIndex;
    slideIndex = decreaseSlide(slideIndex, slideQuantity);
    moverSlide(slideIndex, slideLast);
    //console.clear();
    console.log('indice: ', slideIndex);    
    });


//add event listener for the dots navigation
$dots.forEach((dot) => {
    //console.log(dot);
    dot.addEventListener("click", (e) => {
        let idActual = e.target.id;
        let idActualNumber = parseInt(idActual.slice(-1));
        console.log(idActualNumber, typeof idActualNumber);
        if (idActualNumber !== slideIndex){
            //console.log("indice distinto a la actual diapositiva");
            slideIndex = idActualNumber;
            moverSlide(slideIndex, slideLast);
            loadDots();
        }else{
            //console.log("indice igual a la actual diapositiva");
        }
    });
})


  /*  
setInterval(function(){
        slideLast = slideIndex;
        slideIndex = increaseSlide(slideIndex, slideQuantity);
        moverSlide(slideIndex, slideLast);
    }, 3000);
*/
   