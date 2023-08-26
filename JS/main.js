var menuIcon = document.querySelector("#menu-icon");
var navbarLinks = document.querySelector(".navbar-links")
var navbarButton = document.querySelector(".navbar-button")
menuIcon.addEventListener("click",
function(){
    menuIcon.classList.toggle("bx-x")
    navbarLinks.classList.toggle("active")
    navbarButton.classList.toggle("active")
})
window.onscroll=()=>{
    menuIcon.classList.remove("bx-x")
    navbarLinks.classList.remove("active")
    navbarButton.classList.remove("active")
}
