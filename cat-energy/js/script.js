navToggle = document.querySelector('.nav__toggle');
navbar = document.querySelector('.nav__links');
beforeBtn = document.querySelector('.example__button--before');
afterBtn = document.querySelector('.example__button--after');
exampleImg = document.querySelectorAll('.example__img img');
togglePoint = document.querySelector('.example__toggle-point');
// mapDiv = document.querySelector('contacts__map');

navToggle.addEventListener('click', function(e){
    navToggle.classList.toggle('nav__toggle--close');
    navbar.classList.toggle('nav__links--open');
});

if(beforeBtn) {
    beforeBtn.addEventListener('click', function(e){
        e.preventDefault();
        for(var i = 0; i < exampleImg.length; i++) {
            exampleImg[i].style.right = "0%";
        }
        togglePoint.style.left = "0%";
    });

    afterBtn.addEventListener('click', function(e){
        e.preventDefault();
        for(var i = 0; i < exampleImg.length; i++) {
            exampleImg[i].style.right = "100%";
        }
        togglePoint.style.left = "50%";
    });
}