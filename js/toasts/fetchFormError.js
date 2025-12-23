function showErrorMessage() {
  const template = document.querySelector('#error');
  const errorElement = template.content.querySelector('.error').cloneNode(true);

  document.body.appendChild(errorElement);

  const inner = errorElement.querySelector('.error__inner');
  const button = errorElement.querySelector('.error__button');

  function closeError() {
    errorElement.remove();
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onOutsideClick);
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
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);
}

export { showErrorMessage };
