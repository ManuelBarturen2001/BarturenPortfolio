// Funcionalidad de los modales
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Cambio de color del header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Animación de entrada para las secciones
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Nabar

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navList.classList.remove('active');
          navToggle.classList.remove('active');
      });
  });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      // Obtener el destino del enlace
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Calcular la posición del destino menos el espacio para el encabezado
      const headerOffset = document.querySelector('header').offsetHeight; // Altura del encabezado
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      // Realizar el desplazamiento suave
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Desplazamiento suave
      });
  });
});

// Educación

/*
const viewCertButtons = document.querySelectorAll(".btn-view-cert");

// Añadir evento click a cada botón
viewCertButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Mostrando certificado..."); // Reemplazar con la acción que desees
  });
});


function openModal(imageSrc) {
  const modal = document.getElementById("certificateModalx");
  const certificateImage = document.getElementById("certificateImagex");
  certificateImage.src = imageSrc;
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  document.body.style.overflow = "active"; // Previene el scroll en el fondo

  // Centrar el modal verticalmente según el scroll
  const scrollY = window.scrollY; // Obtiene la posición del scroll
  const modalContent = modal.querySelector('.modal-contentx');
  modalContent.style.top = `${scrollY + 50}px`; // Ajustar la posición superior
}

function closeModal() {
  const modal = document.getElementById("certificateModalx");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restaura el scroll
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  const modal = document.getElementById("certificateModalx");
  if (event.target === modal) {
      closeModal();
  }
};
*/

// Proyectos
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function openImageInNewTab(imageSrc) {
  window.open(imageSrc, '_blank');
}

window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (event.target == modal) {
      closeModal(modal.id);
    }
  });
};

function handleLikeClick(event) {
  event.stopPropagation(); // Evita que el clic en el botón "Like" active el clic en la tarjeta
  // Aquí puedes manejar cualquier acción adicional del botón "Like"
  console.log("Like button clicked!");
}

document.getElementById('whatsapp').addEventListener('click', function() {
  const formattedMessage = `Hola :D, Me interesa tu proyecto`;
  const whatsappUrl = `https://wa.me/51924658309?text=${formattedMessage}`;
  window.open(whatsappUrl, '_blank');
});
document.getElementById('whatsapp1').addEventListener('click', function() {
  const formattedMessage = `Hola :D, Me interesa tu proyecto`;
  const whatsappUrl = `https://wa.me/51924658309?text=${formattedMessage}`;
  window.open(whatsappUrl, '_blank');
});
document.getElementById('whatsapp2').addEventListener('click', function() {
  const formattedMessage = `Hola :D, Me interesa tu proyecto`;
  const whatsappUrl = `https://wa.me/51924658309?text=${formattedMessage}`;
  window.open(whatsappUrl, '_blank');
});

// Contactame

document.getElementById('whatsapp-button').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Formatear el mensaje
  const formattedMessage = `Nombre: ${name}%0AEmail: ${email}%0AAsunto: ${subject}%0AMensaje: ${message}`;
  
  // Enlace de WhatsApp
  const whatsappUrl = `https://wa.me/51924658309?text=${formattedMessage}`;
  
  // Abrir WhatsApp
  window.open(whatsappUrl, '_blank');
});
