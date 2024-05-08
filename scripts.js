window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        const expandingCircle = document.getElementById('expanding-circle');
        const logo = document.getElementById('logo');
        const content = document.querySelector('.content');
       
        const logoPlaceholder = document.querySelector('.logo-placeholder');

        // Cambiar el fondo del loading screen a negro
        loadingScreen.style.transition = 'background-color 2s ease';
        loadingScreen.style.backgroundColor = 'black';

        // Iniciar la transición de desvanecimiento del círculo
        expandingCircle.style.transition = 'opacity 2s ease';
        expandingCircle.style.opacity = 0;

        // Ajustar el logo para la nueva ubicación
        logo.style.width = '150px'; // Nuevo tamaño más pequeño
        logo.style.top = '10%'; // Nueva posición arriba en el content
        logo.style.transform = 'translate(-50%, 0%)'; // Ajustar transform para alineación correcta
        logo.style.position = 'absolute'
        setTimeout(function() {
            loadingScreen.style.display = 'none';

            // Mover físicamente el logo al contenedor en 'content'
            logoPlaceholder.appendChild(logo);

            // Configurar visibilidad y opacidad del contenido principal
            content.style.display = 'block';
            content.style.opacity = 0;
            content.style.transition = 'opacity 3s ease';
            
        

            // Iniciar la transición de opacidad para el contenido
            setTimeout(() => {
                content.style.opacity = 1;
                content2.style.opacity = 1;
            }, 10); // Pequeño retraso para iniciar la transición

            // Activación de texto cuando está visible
            let observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.from-left, .from-right').forEach(text => {
                            text.classList.add('active-text');
                        });
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            });

            observer.observe(document.querySelector('.rectangle'));
        }, 2000); // Tiempo para que el círculo y el logo se ajusten
    }, 3000); // Tiempo hasta que se complete la animación del círculo
});
document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('interactiveSection');
    const message = document.getElementById('message');
    let messageCount = 0;
    let lastScrollTop = 0; // Mantener un registro de la última posición de scroll para detectar dirección
    
    window.addEventListener('scroll', function() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        // hacia abajo
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
    
        if (sectionBottom < viewportHeight + 50 && messageCount < 3) {
          event.preventDefault();
          if (messageCount === 0) {
            setTimeout(() => {
              message.textContent = 'Te dije que esperes!';
              section.scrollIntoView({ behavior: 'smooth' });
              messageCount++;
            }, 2000); // Retraso de 2 segundos antes de cambiar el mensaje
          } else if (messageCount === 1) {
            setTimeout(() => {
              message.innerHTML = '¡Realmente, espera! <img src="tu-imagen.jpg" alt="Imagen" style="width: 50px; height: auto;"/>';
              section.scrollIntoView({ behavior: 'smooth' });
              messageCount++;
            }, 2000);
          }
        }
      } else {
        // hacia arriba
      }
      lastScrollTop = st <= 0 ? 0 : st; // Para propósitos de detección de dirección
    }, false);
  });
  