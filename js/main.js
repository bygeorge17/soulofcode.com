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


  (function() {
    // Reemplaza 'TU_USER_ID' con tu user ID de EmailJS
    emailjs.init("dECp_1Fm9NpcTx_aA")
  })();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // El método sendForm envía los datos del formulario
  // Reemplaza "TU_SERVICE_ID" y "TU_TEMPLATE_ID" con los datos de tu cuenta EmailJS
  emailjs.sendForm("service_7x3fnwg", "template_w8n1krh", this)
    .then(function(response) {
      console.log("¡Correo enviado con éxito!", response.status, response.text);
      alert("¡Tu mensaje ha sido enviado correctamente!");
      // Opcional: aquí puedes limpiar el formulario
      event.target.reset();
    }, function(error) {
      console.log("Hubo un error al enviar el correo", error);
      alert("Lo sentimos, no se pudo enviar tu mensaje. Intenta más tarde.");
    });
});
