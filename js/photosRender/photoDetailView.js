import { renderComments } from './commentsDetailView.js';
import { clearComments } from '../utils/clearComments.js';
import { bindEscapeKeydown, unbindEscapeKeydown } from '../utils/keyboardControl.js';

const closeButton = document.querySelector('.big-picture__cancel');
let isBound = false;

function showDetailView(photoData) {
  clearComments();

  const bigPictureContainer = document.querySelector('.big-picture');
  const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img img');
  const likesCount = bigPictureContainer.querySelector('.likes-count');
  const commentsCount = bigPictureContainer.querySelector('.comments-count');
  const photoDescription = bigPictureContainer.querySelector('.social__caption');
  bigPictureImg.src = photoData.url;
  bigPictureImg.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  photoDescription.textContent = photoData.description;

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  renderComments(photoData.comments);
  bind();
}

function closeDetailView() {
  const bigPictureContainer = document.querySelector('.big-picture');
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  unbind();
}

function bind() {
  if (isBound) {
    return;
  }
  closeButton.addEventListener('click', closeDetailView);
  bindEscapeKeydown();
  isBound = true;
}

function unbind() {
  if (!isBound) {
    return;
  }
  closeButton.removeEventListener('click', closeDetailView);
  unbindEscapeKeydown();
  isBound = false;
}

export { closeDetailView, showDetailView };
