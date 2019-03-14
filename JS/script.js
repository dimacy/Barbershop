document
var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login")
var close = document.querySelector(".modal-close");
var map = document.querySelector(".modal-map");
var maplink = document.querySelector(".js-map-button");
var mapclose = document.querySelector(".map-close");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

maplink.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.add("modal-show");
});

mapclose.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.remove("modal-show");
});