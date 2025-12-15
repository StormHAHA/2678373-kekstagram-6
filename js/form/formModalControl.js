import { onFormEscapeKeydown } from '../utils/keyboardControl.js';

function trackFormUpload() {
  const uploadInput = document.querySelector('.img-upload__input');
  const closeFormModalButton = document.querySelector('.img-upload__cancel');

  uploadInput.addEventListener('change', openFormModal);
  closeFormModalButton.addEventListener('click', closeFormModal);
}

function closeFormModal() {
  const uploadInput = document.querySelector('.img-upload__input');
  const originalEffect = document.querySelector('#effect-none');
  const hashtagsInput = document.querySelector('.text__hashtags');
  const descriptionInput = document.querySelector('.text__description');
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const page = document.querySelector('body');

  uploadOverlay.classList.add('hidden');
  page.classList.remove('modal-open');
  uploadInput.value = '';
  originalEffect.checked = true;
  hashtagsInput.value = '';
  descriptionInput.value = '';
  document.removeEventListener('keydown', onFormEscapeKeydown);
}

function openFormModal() {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const page = document.querySelector('body');

  uploadOverlay.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeydown);
}

export { trackFormUpload, closeFormModal };
