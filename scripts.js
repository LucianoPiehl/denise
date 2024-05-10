window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        const expandingCircle = document.getElementById('expanding-circle');
        const logo = document.getElementById('logo');
        const content = document.querySelector('.content');
        const video = document.getElementById('miVideo');
        const logoPlaceholder = document.querySelector('.logo-placeholder');

        // Cambiar el fondo del loading screen a negro
        loadingScreen.style.transition = 'background-color 2s ease';
        loadingScreen.style.backgroundColor = 'black';

        // Iniciar la transición de desvanecimiento del círculo
        expandingCircle.style.transition = 'opacity 2s ease, transform 2s ease';
        expandingCircle.style.opacity = 0;
        expandingCircle.style.transform = 'scale(1.2)';

        // Ajustar el logo para desvanecerse y expandirse
        logo.style.transition = 'transform 2s ease, opacity 2s ease'; // Transición única para transform y opacity
        logo.style.transform = 'scale(1.7)';
        logo.style.opacity = 0;

        setTimeout(function() {
            loadingScreen.style.display = 'none';
         
            // Configurar visibilidad y opacidad del contenido principal
            content.style.display = 'block';
            content.style.opacity = 0;
            content.style.transition = 'opacity 3s ease';

            // Iniciar la transición de opacidad para el contenido
            setTimeout(() => {
                content.style.opacity = 1;
                video.style.opacity = 1;
                video.style.display = 'block';

                // Aplicar la animación al logo que aparece en la esquina
                var logoAparecido = document.querySelector('.Logo_aparecido');
                logoAparecido.style.animationName = 'fadeIn'; // Inicia la animación

            }, 10); // Pequeño retraso para iniciar la transición

        }, 2000); // Tiempo para que el círculo y el logo se ajusten
    }, 3000); // Tiempo hasta que se complete la animación del círculo
});
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        const currentMessage = document.querySelector('.message.active');
        if (!currentMessage) return;

        // Agregar clase para animar hacia arriba y desaparecer
        currentMessage.classList.add('up');

        // Esperar a que termine la animación
        setTimeout(() => {
            currentMessage.classList.remove('active', 'up');

            // Mover el mensaje al final del contenedor para reusarlo si es necesario
            currentMessage.parentNode.appendChild(currentMessage);

            // Activar el siguiente mensaje
            const nextMessage = document.querySelector('.message');
            if (nextMessage) {
                nextMessage.classList.add('active');
            }
        }, 500);  // Debe coincidir con la duración de la transición CSS
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        moveMessageUp();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Asegurarse de que el primer mensaje sea visible al cargar
    const firstMessage = document.querySelector('.message');
    if (firstMessage) firstMessage.classList.add('active');
});

document.getElementById('downArrowButton').addEventListener('click', function() {
    moveMessageUp();
});

document.getElementById('downArrowButton').addEventListener('click', function() {
    moveMessageUp();
});

function moveMessageUp() {
    const currentMessage = document.querySelector('.message.active');
    if (!currentMessage) return;

    // Si el mensaje activo es el último, no hacer nada
    if (currentMessage.classList.contains('last-message')) {
        return; // No mover el último mensaje
    }

    // No es el último mensaje, mover hacia arriba y mostrar el siguiente
    currentMessage.classList.add('up');
    const nextMessage = currentMessage.nextElementSibling;

    setTimeout(() => {
        currentMessage.classList.remove('active', 'up');
        currentMessage.classList.add('inactive'); // Vuelve a ser inactivo
        if (nextMessage) {
            nextMessage.classList.remove('inactive');
            nextMessage.classList.add('active'); // Activar el siguiente mensaje
        }
    }, 1500); // Esperar a que la animación de desplazamiento hacia arriba termine
}

