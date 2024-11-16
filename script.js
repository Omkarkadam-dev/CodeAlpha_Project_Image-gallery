const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.image-box img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;


function updateGallery(index) {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
  mainImage.src = thumbnails[index].src;
}


function showNextImage() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateGallery(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateGallery(currentIndex);
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    updateGallery(currentIndex);
  });
});

updateGallery(currentIndex);
