'use strict'

// navbar 토글 버튼 활성화
const navbarMenu=document.querySelector('.nav__menu');
const navbarToggle=document.querySelector('.navbar__toggle-btn');

navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
});

// 메인 슬라이드
const slides = document.querySelectorAll('.main__slides');
const dots =  document.querySelectorAll('.dots');
let slideIndex = 0;

let myVar;

showSlides();

function showSlides(){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].setAttribute('class', '');
    }
    
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].setAttribute('class', 'active');

    myVar = setTimeout(showSlides, 2000);
}//showSlides

function stopSlide(){
    clearTimeout(myVar);
} //stopSlide

const dotsBox=document.querySelector('.dotContainer');

dotsBox.addEventListener('click', (event)=>{
    const filter=event.target.dataset.dot || event.target.parentNode.dataset.dot;

    currentSlide(filter);
})

/* ========= */
function currentSlide(num){
    stopSlide();
    slideIndex = num;

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].setAttribute('class', '');
    }
    
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].setAttribute('class', 'active');
}