var loginBtn = document.querySelector(".sign-in");
var mapBtn = document.querySelectorAll(".open-map");

var loginModal = document.querySelector(".login");
var mapModal = document.querySelector(".map");

var loginClose = document.querySelector(".login-close");
var mapClose = document.querySelector(".map-close");

var loginInput = document.querySelector("#login");
var passwordInput = document.querySelector("#password");
var loginForm = document.querySelector(".login-form");

loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    loginModal.classList.add("show");
    loginInput.focus();
});

mapBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();
        mapModal.classList.add("show");
    });
});

loginClose.addEventListener("click", function(){
    loginModal.classList.remove("show");
    loginModal.classList.remove("error");
});

mapClose.addEventListener("click", function(){
    mapModal.classList.remove("show");
});

window.addEventListener("keyup", function (e){
    if(e.keyCode == 27) {
        if(loginModal.classList.contains("show") || mapModal.classList.contains("show")) {
            loginModal.classList.remove("show");
            loginModal.classList.remove("error");
            mapModal.classList.remove("show");
        }
    }
});

loginForm.addEventListener("submit", function(e){
    if(!loginInput.value || !passwordInput.value) {
        e.preventDefault();
        loginModal.classList.remove("error");
        loginModal.offsetWidth = loginModal.offsetWidth;
        loginModal.classList.add("error");
    }
});