import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

// Add images to gallery

function addImgToGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}"
          data-source="${original}" 
          alt="${description}"
        >
      </a>
    </div>
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

  const handleClick = (event) => {
    console.log(event);
  };

  const closeOriginalImg = event => {
    if(event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`, 
    {
      onShow: instance => {
        document.addEventListener('keydown', closeOriginalImg);
        document.addEventListener('click', handleClick);
      },
  
      onClose: instance => {
        document.removeEventListener('keydown', closeOriginalImg);
        document.removeEventListener('click', handleClick);
      }
    }
  );
  
    instance.show();
  };
  








