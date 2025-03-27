document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const images = [
        'url(https://primefiscal.com.mx/wp-content/uploads/2017/07/service2.png)',
        'url(https://audit.com.co/wp-content/uploads/banner-revisoria.jpg)',
        'url(https://img.freepik.com/premium-vector/set-linear-statistics-icons-seamless-pattern-white-background-thin-line-elements-business-vector-illustration_259594-296.jpg)'
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
