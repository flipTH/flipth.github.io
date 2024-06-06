let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel-container').style.transform = newTransform;
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

function autoSlide() {
    moveSlide(1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    setInterval(autoSlide, 3000); // Change image every 3 seconds
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').classList.remove('hidden');
    }
});