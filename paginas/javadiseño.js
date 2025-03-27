document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const images = [
        'url(https://i.pinimg.com/originals/26/04/b0/2604b05be13c960f4323a90163420575.jpg)',
        'url(https://media.istockphoto.com/id/477445642/es/foto/ll%C3%A9veme-a-the-dream.jpg?s=612x612&w=0&k=20&c=LzWocN86w48lx3OP1VebNwXRvDaBgC9FzAd1PstK9Pg=)',
        'url(https://gustavoliver.com/wp-content/uploads/2023/03/mente-creativa-concepto-inteligencia-collage-arte-sobre-fondo-blanco-ia-generativa1.jpg)'
    ];
    let currentIndex = 0;
    const interval = 5000; 

    function changeBackground() {
        header.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, interval);
});
