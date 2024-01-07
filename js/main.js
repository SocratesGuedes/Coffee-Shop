// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Menu Open Close

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu")
});

// Close Menu On Scroll 
