import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Add images to gallery

function addImgToGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
      <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        />
      </a>
    `;
  }).join('');
}

const cardsGallery = addImgToGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

// Open original image

galleryContainer.addEventListener('click', onContainerGallery);

function onContainerGallery(event) {

  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');

  if(!isGalleryImageEl) {
    return;
  }

  openOriginalImg();

}

function openOriginalImg() {

  let lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

}

