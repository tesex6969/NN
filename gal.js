// Pobierz elementy z dokumentu
const mainImage = document.querySelector('#mid img');
const thumbnails = document.querySelectorAll('#mini img');
const leftButton = document.querySelector('#left button');
const rightButton = document.querySelector('#right button');

// Stwórz tablicę przechowującą źródła obrazów
const images = Array.from(thumbnails).map(thumb => thumb.src);
let currentIndex = 0;

// Funkcja do aktualizacji głównego obrazu
function updateMainImage(index) {
    mainImage.src = images[index];
}

// Dodaj zdarzenia kliknięcia dla miniatur
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage(currentIndex);
    });
});

// Obsługa kliknięcia lewego przycisku
leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
});

// Obsługa kliknięcia prawego przycisku
rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
});
