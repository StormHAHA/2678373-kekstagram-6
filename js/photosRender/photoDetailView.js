import { renderComments } from './commentsDetailView.js';
import { clearComments } from '../utils/clearComments.js';
import { bindEscapeKeydown } from '../utils/keyboardControl.js';

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
}


function closeDetailView() {
  const bigPictureContainer = document.querySelector('.big-picture');
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
}
const closeButton = document.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', closeDetailView);
bindEscapeKeydown();


export { closeDetailView, showDetailView };
