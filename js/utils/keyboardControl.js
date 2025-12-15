import { closeDetailView } from '../photosRender/photoDetailView.js';
import { closeFormModal } from '../form/formModalControl.js';
function onPhotoEscapeKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
    evt.preventDefault();
    closeDetailView();
  }
}
function onFormEscapeKeydown(evt) {
  if (!(evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27)) {
    return;
  }
  const activeElement = document.activeElement;
  if (activeElement.classList.contains('text__hashtags') || activeElement.classList.contains('text__description')) {
    return;
  }
  evt.preventDefault();
  closeFormModal();
}
function bindEscapeKeydown() {
  document.addEventListener('keydown', onPhotoEscapeKeydown);
}

function unbindEscapeKeydown() {
  document.removeEventListener('keydown', onPhotoEscapeKeydown);
}

export { bindEscapeKeydown, unbindEscapeKeydown, onFormEscapeKeydown };
