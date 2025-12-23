import { PHOTO_UPLOAD_ENDPOINT } from '../constants/constants.js';
function sendForm(form, onSuccess, onError) {
  const submitButton = form.querySelector('.img-upload__submit');
  submitButton.disabled = true;

  const formData = new FormData(form);

  fetch(PHOTO_UPLOAD_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers : {
      'Content-Type' : 'multipart/form-data',
    },
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
