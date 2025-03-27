document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const images = [
        'url(https://th.bing.com/th/id/R.5e1156f6d5de072e3a75406769680d6e?rik=URAIIkfhyceRhQ&pid=ImgRaw&r=0)',
        'url(https://www.gabrielazambranomd.com/wp-content/uploads/estudiantes-medicina-1000x500.jpg)',
        'url(https://lucerna.edu.mx/wp-content/uploads/2021/08/LicEnfermeria-header-lucerna.jpg)'
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
