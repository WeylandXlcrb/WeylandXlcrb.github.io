var navMobile = document.querySelector('.mobile-nav'),
    navToggle = document.querySelector('.nav .toggle'),
    navClose = document.querySelector('.mobile-nav .nav-close');

navToggle.addEventListener('click', function(e){
    e.preventDefault();
    navMobile.classList.add('nav-open');
});

navClose.addEventListener('click', function(e){
    e.preventDefault();
    navMobile.classList.remove('nav-open');
});