import { onFormEscapeKeydown } from '../utils/keyboardControl.js';
function showErrorMessage() {
  const template = document.querySelector('#error');
  const page = document;
  page.removeEventListener('keydown', onFormEscapeKeydown);
  const errorElement = template.content.querySelector('.error').cloneNode(true);
  errorElement.style.zIndex = 1000;
  page.body.appendChild(errorElement);

  const inner = errorElement.querySelector('.error__inner');
  const button = errorElement.querySelector('.error__button');

  function closeError() {
    errorElement.remove();
    page.removeEventListener('keydown', onEscKeydown);
    page.removeEventListener('click', onOutsideClick);
    page.addEventListener('keydown', onFormEscapeKeydown);
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

export { showErrorMessage };
