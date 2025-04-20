$(document).ready(function () {
    // Animación al entrar al sitio (hero text)
    $('.fadeIn').hide().fadeIn(2000);
    $('.slideDown').hide().slideDown(1200);
  
    // Hover en las cards de Clases destacadas
    $('.card').hover(
      function () {
        $(this).animate({ marginTop: '-10px' }, 300);
      },
      function () {
        $(this).animate({ marginTop: '0px' }, 300);
      }
    );
  
    // Contador animado básico
    let contador = 0;
    let intervalo = setInterval(function () {
      if (contador < 500) { // cantidad de miembros
        contador += 5;
        $('#counterNumber').text(contador);
      } else {
        clearInterval(intervalo);
      }
    }, 20); // velocidad
  
    // Formulario con efecto spinner al enviar
    $('form').on('submit', function (e) {
      e.preventDefault();
      let $btn = $(this).find('button');
      $btn.html('<span class="spinner-border spinner-border-sm"></span> Enviando...');
      setTimeout(() => {
        $btn.text('Mensaje Enviado');
      }, 2000); // Simula tiempo de envío
    });
  });
  $(document).ready(function () {
    // Efecto flip en tarjetas
    $('.entrenador-card').hover(function () {
      $(this).toggleClass('flipped'); // Al pasar el ratón, se agrega o quita la clase 'flipped'
    });
  });
// spinner contacto
$(document).ready(function () {
    // Validación en tiempo real
    $('#contact-form input, #contact-form textarea').on('input', function () {
      if ($(this).val().length > 0) {
        $(this).removeClass('is-invalid').addClass('is-valid');
      } else {
        $(this).removeClass('is-valid').addClass('is-invalid');
      }
    });
  
    // Enviar el formulario
    $('#contact-form').on('submit', function (e) {
      e.preventDefault(); // Prevenir que se recargue la página
  
      // Mostrar el spinner al enviar el formulario
      $('#spinner').fadeIn(); // Muestra el spinner con un desvanecimiento
  
      // Simular un envío exitoso con un retraso
      setTimeout(function () {
        // Ocultar el spinner
        $('#spinner').fadeOut(); // Oculta el spinner con un desvanecimiento
  
        // Mostrar el modal de confirmación
        $('#confirmationModal').modal('show');
  
        // Limpiar el formulario
        $('#contact-form')[0].reset();
        $('#contact-form input, #contact-form textarea').removeClass('is-valid is-invalid');
      }, 3000); // Simula un retraso de 3 segundos para el envío
    });
  });
  