// Script para alternar la visualización del menú en dispositivos móviles
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});


$(document).ready(function() {
  AOS.init();
});

$(document).ready(function() {
  $('.services-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
