// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
    // Fade-in al hacer scroll
    const elements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(el => observer.observe(el));
  
    // Accesibilidad: mostrar foco visual al navegar con teclado
    document.body.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        document.body.classList.add('show-focus');
      }
    });
  });
  