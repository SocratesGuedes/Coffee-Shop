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
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2000',
  delay: '100',
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: 'left'});
animate.reveal(".home-img", {origin: 'bottom'});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {intervel: 100});