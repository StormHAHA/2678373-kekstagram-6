import { onFormEscapeKeydown } from '../utils/keyboardControl.js';
import { trackFormImageScaleEdit } from './formImageScaleEdit.js';
import { validateForm, resetValidator } from './formValidation.js';
import { initSlider, resetFilters } from './formImageFilterEdit.js';

let imageObjectUrl = null;

function trackFormUpload() {
  const uploadInput = document.querySelector('.img-upload__input');
  const closeFormModalButton = document.querySelector('.img-upload__cancel');

  uploadInput.addEventListener('change', openFormModal);
  closeFormModalButton.addEventListener('click', closeFormModal);
}

function closeFormModal() {
  const uploadInput = document.querySelector('.img-upload__input');
  const hashtagsInput = document.querySelector('.text__hashtags');
  const descriptionInput = document.querySelector('.text__description');
  const imagePreview = document.querySelector('.img-upload__preview img');
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const page = document.body;

  uploadOverlay.classList.add('hidden');
  page.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeydown);
  uploadInput.value = '';
  if (imageObjectUrl) {
    URL.revokeObjectURL(imageObjectUrl);
    imageObjectUrl = null;
  }
  imagePreview.src = 'img/upload-default-image.jpg';

  hashtagsInput.value = '';
  descriptionInput.value = '';
  resetValidator();
  resetFilters();
}

function openFormModal() {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  const imagePreview = document.querySelector('.img-upload__preview img');
  const uploadInput = document.querySelector('.img-upload__input');
  const page = document.querySelector('body');
  const file = uploadInput.files[0];

  if (file && file.type.startsWith('image/')) {
    imageObjectUrl = URL.createObjectURL(file);
    imagePreview.src = imageObjectUrl;
  }

  uploadOverlay.classList.remove('hidden');
  page.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeydown);

  initSlider();
  trackFormImageScaleEdit();
  validateForm();

}

export { trackFormUpload, closeFormModal };
