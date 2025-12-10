import { showDetailView } from '../photosRender/photoDetailView.js';

let isBound = false;
let photosMap = null;
let picturesContainer = null;

function bound(container, data) {
  if (isBound) {
    return;
  }
  picturesContainer = container;
  photosMap = new Map(data.map((photoData) => [photoData.id, photoData]));
  picturesContainer.addEventListener('click', onPhotoClick);
  isBound = true;
}

function unbound() {
  if (!isBound) {
    return;
  }
  picturesContainer.removeEventListener('click', onPhotoClick);
  isBound = false;
}

function onPhotoClick(evt) {
  const picture = evt.target.closest('.picture');

  const id = Number(picture.dataset.id);
  const photoData = photosMap.get(id);
  showDetailView(photoData);
}

export { bound as bindPhotoDetailView, unbound as unbindPhotosDetailView };
