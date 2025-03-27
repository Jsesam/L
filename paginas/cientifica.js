document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const images = [
        'url(https://2020.24h24l.org/images/banner-programacion.jpg)',
        'url(https://www.cienciamx.com/images/aic/aprende-head-62817.jpg)',
        'url(https://www.cienciamx.com/images/aic/tecnologia/tics/banner-bad-smells-programacion.jpg)'
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
