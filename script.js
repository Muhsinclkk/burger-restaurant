//!Aşagıdaki kodlarda js de toggle yapısı ile açılır kapanır menu yaptık


//!----SEARCH----
const searchForm = document.querySelector(".search-form")

const searchBtn = document.querySelector("#search-btn")

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active")
});


//!----CART----
const cartItemsContainer = document.querySelector(".cart-items-container")

const cartBtn = document.querySelector("#cart-btn")

cartBtn.addEventListener("click", function(){
    cartItemsContainer.classList.toggle("active")
});




//!----MENU----
const navbar = document.querySelector(".navbar")

const menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active")
});