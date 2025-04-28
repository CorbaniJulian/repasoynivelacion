const typed = new Typed('.texto-multiple', {
    strings: ['Ingeniero','Astronauta','Filosofo','Futbolista'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelayed:1200,
    loop:true,
});

document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("#titulo h2");

    titulo.addEventListener("mouseenter", () => {
        titulo.style.transition = "transform 0.3s";
        titulo.style.transform = "scale(1.2)";
    });

    titulo.addEventListener("mouseleave", () => {
        titulo.style.transition = "transform 0.3s";
        titulo.style.transform = "scale(1)";
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
});
