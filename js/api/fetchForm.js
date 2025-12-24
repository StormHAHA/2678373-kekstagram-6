import { BASE_URL } from '../constants/constants.js';
function sendForm(form, onSuccess, onError) {
  const submitButton = form.querySelector('.img-upload__submit');
  submitButton.disabled = true;

  const formData = new FormData(form);

  fetch(BASE_URL, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка отправки формы');
    })
    .then(() => {
      onSuccess();
    })
    .catch((err) => {
      onError(err);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
}

export { sendForm };
