import { onFormEscapeKeydown } from '../utils/keyboardControl.js';
function showMessage(success) {
  const successClass = success ? 'success' : 'error';
  const template = document.querySelector(`#${successClass}`);
  const page = document;
  if (!success) {
    page.removeEventListener('keydown', onFormEscapeKeydown);
  }
  const statusElement = template.content.querySelector(`.${successClass}`).cloneNode(true);
  statusElement.style.zIndex = 1000;
  page.body.appendChild(statusElement);

  const inner = statusElement.querySelector(`.${successClass}__inner`);
  const button = statusElement.querySelector(`.${successClass}__button`);

  function closeError() {
    statusElement.remove();
    page.removeEventListener('keydown', onEscKeydown);
    page.removeEventListener('click', onOutsideClick);
    if (!success) {
      page.addEventListener('keydown', onFormEscapeKeydown);
    }
  }

  function onEscKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeError();
    }
  }

  function onOutsideClick(evt) {
    if (!inner.contains(evt.target)) {
      closeError();
    }
  }

  button.addEventListener('click', closeError);
  page.addEventListener('keydown', onEscKeydown);
  page.addEventListener('click', onOutsideClick);
}

export { showMessage };
