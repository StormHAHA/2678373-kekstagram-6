import { closeDetailView } from '../photosRender/photoDetailView.js';
function onEscapeKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
    evt.preventDefault();
    closeDetailView();
  }
}

function bindEscapeKeydown() {
  document.addEventListener('keydown', onEscapeKeydown);
}

function unbindEscapeKeydown() {
  document.removeEventListener('keydown', onEscapeKeydown);
}

export { bindEscapeKeydown, unbindEscapeKeydown };
