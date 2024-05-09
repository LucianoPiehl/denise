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
