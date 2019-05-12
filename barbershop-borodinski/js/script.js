var toggle = document.querySelector('.nav__toggle'),
    navBar = document.querySelector('.nav__bar'),
    signInBtn = document.querySelector('.nav__link--sign-in'),
    signInModal = document.querySelector('.sign-in--modal'),
    signInForm = document.querySelector('.sign-in__form'),
    inputLogin = document.querySelector('#login'),
    inputPassword = document.querySelector('#password'),
    signInClose = document.querySelector('.sign-in--modal .button--close'),
    advantagesSlider = document.querySelectorAll('.advantage'),
    advantagesSliderPoints = document.querySelectorAll('.advantages .slider__point'),
    testimonialsSlider = document.querySelectorAll('.feedback'),
    testimonialsSliderPoints = document.querySelectorAll('.testimonials .slider__point'),
    prevBtn = document.querySelector('.prev-button'),
    nextBtn = document.querySelector('.next-button');

    var currentSlide = 1;
    var dark = '--dark--active';
    var light = '--active';


toggle.addEventListener('click', function(e){
    e.preventDefault();
    toggleNav();
});

signInBtn.addEventListener('click', function(e){
    e.preventDefault();
    closeNav();
    signInModal.classList.add('sign-in--show');
    document.body.classList.add('stop-scroll');
});

signInClose.addEventListener('click', function(e){
    e.preventDefault();
    signInModal.classList.remove('sign-in--show');
    document.body.classList.remove('stop-scroll');
    signInForm.classList.remove('form--error');
});

signInForm.addEventListener('submit', function(e) {
    if(!inputLogin.value.trim() || !inputPassword.value.trim()){
        e.preventDefault();
        signInForm.classList.remove('form--error');
        signInForm.offsetWidth = signInForm.offsetWidth;
        signInForm.classList.add('form--error');
    }
});

for(var i = 0; i < testimonialsSliderPoints.length; i++){
    testimonialsSliderPoints[i].addEventListener('click', function(e){
        var slide = e.target.dataset.slide;
        changeSlide(testimonialsSlider, testimonialsSliderPoints, slide, dark);        
    })
}

for(var i = 0; i < advantagesSliderPoints.length; i++){
    advantagesSliderPoints[i].addEventListener('click', function(e){
        var slide = e.target.dataset.slide;
        changeSlide(advantagesSlider, advantagesSliderPoints, slide, light);        
    })
}

if(prevBtn){
    prevBtn.addEventListener('click', function(e){
        if(currentSlide > 1) {
            currentSlide--;
        }
        changeSlide(testimonialsSlider, testimonialsSliderPoints, currentSlide, dark)
    });
}

if(nextBtn){
    nextBtn.addEventListener('click', function(e){
        if(currentSlide < 3) {
            currentSlide++;
        }
        changeSlide(testimonialsSlider, testimonialsSliderPoints, currentSlide, dark)
    });
}

function toggleNav(){
    navBar.classList.toggle('nav__bar--open');
    toggle.classList.toggle('nav__toggle--close');
    document.body.classList.toggle('stop-scroll');
}

function closeNav(){
    navBar.classList.remove('nav__bar--open');
    toggle.classList.remove('nav__toggle--close');
    document.body.classList.remove('stop-scroll');
}

function changeSlide(slider, sliderPoints, slide, color){
    position = (slide - 1) * 100 +'%';
    currentSlide = Number(slide);

    // Toggle buttons state
    if(currentSlide === 1) {
        prevBtn.setAttribute('disabled', 'disabled');
    } else if(currentSlide > 1) {
        prevBtn.removeAttribute('disabled');
    }
    
    if(currentSlide === 3) {
        nextBtn.setAttribute('disabled', 'disabled');
    } else if(currentSlide < 3) {
        nextBtn.removeAttribute('disabled');
    }

    // change slide
    for(var i = 0; i < slider.length; i++){
        slider[i].style.right = position;
    }

    // change slider point state
    for(var i = 0; i < sliderPoints.length; i++){
        sliderPoints[i].classList.remove('slider__point' + color);
        if(i === slide-1) {
            sliderPoints[i].classList.add('slider__point' + color);
        }
    }
}