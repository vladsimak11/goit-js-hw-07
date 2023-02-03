import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

function addImgToGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}"
          data-source="${original}" 
          alt="${description}">
      </a>
    </div>
    `;
  }).join('');
}

const cardsGallery = addImgToGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

galleryContainer.addEventListener('click', onContainerGallery)

function onContainerGallery(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if(!isGalleryImageEl) {
    return;
  }
  openOriginalImg(event.target.dataset.source);
  console.log(event.target.dataset.source);
}

function openOriginalImg(bigImgGallery) {

  const instance = basicLightbox.create(`
  <img src="${bigImgGallery}">
  `)
  
  instance.show()
}