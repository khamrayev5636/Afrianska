const elNav = document.querySelector(".header__nav")
const elBtnBurger = document.querySelector(".header__burger");
const elBtnClose = document.querySelector(".header__close");

elBtnBurger.addEventListener("click" , ()=>{
    elNav.classList.add("header__nav-js")
});

elBtnClose.addEventListener("click" , ()=>{
    elNav.classList.remove("header__nav-js")
});