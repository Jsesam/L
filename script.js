let index = 0;
const slides = document.querySelectorAll(".slide");

function cambiarSlide() {
    // Remover clase active de TODAS las slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    
    // Avanzar al siguiente índice
    index = (index + 1) % slides.length;
    
    // Agregar clase active a la slide actual
    slides[index].classList.add("active");
}

// Inicializar: mostrar solo la primera imagen
slides.forEach((slide, i) => {
    if (i !== 0) {
        slide.classList.remove("active");
    }
});

// Iniciar el carrusel
setInterval(cambiarSlide, 3000);
