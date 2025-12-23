function showSuccessMessage() {
  const template = document.querySelector('#success');
  const successElement = template.content.querySelector('.success').cloneNode(true);

  document.body.appendChild(successElement);

  const inner = successElement.querySelector('.success__inner');
  const button = successElement.querySelector('.success__button');

  function closeSuccess() {
    successElement.remove();
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onOutsideClick);
  }

  function onEscKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSuccess();
    }
  }

  function onOutsideClick(evt) {
    if (!inner.contains(evt.target)) {
      closeSuccess();
    }
  }

  button.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);
}

export { showSuccessMessage };
