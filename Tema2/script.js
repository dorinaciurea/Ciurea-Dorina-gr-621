let currentImageIndex = 0;
const images = document.querySelectorAll('.slider img');

function showImage(index) {
  images.forEach(img => {
    img.style.display = 'none';
  });
  images[index].style.display = 'block';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(nextImage, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay();