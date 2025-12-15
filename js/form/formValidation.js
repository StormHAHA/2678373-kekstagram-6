
function getHashtagsError(tags) {
  if (!tags) {
    return '';
  }

  const hashtags = tags.trim().split(/\s+/);

  if (hashtags.length > 5) {
    return 'Слишком много хэштегов';
  }

  const lowerTags = hashtags.map((tag) => tag.toLowerCase());

  for (const tag of hashtags) {
    if (!tag.startsWith('#')) {
      return 'Введен невалидный хэштег';
    }

    if (!/^#[a-zA-Zа-яА-Я0-9]+$/.test(tag)) {
      return 'Введен невалидный хэштег';
    }

    if (tag.length > 20 || tag.length < 2) {
      return 'Введен невалидный хэштег';
    }

    if (lowerTags.filter((t) => t === tag.toLowerCase()).length > 1) {
      return 'Хэштег повторяется';
    }
  }

  return '';
}
function getDescriptionError(description) {
  if (!description) {
    return '';
  }

  return description.length < 140 ? '' : 'Описание не должно превышать 140 символов';
}

function validateHashtags(tags) {
  return getHashtagsError(tags) === '';
}

function validateDescription(description) {
  return getDescriptionError(description) === '';
}

function validateForm() {
  const form = document.querySelector('.img-upload__form');
  const hashtagsInput = document.querySelector('.text__hashtags');
  const descriptionInput = document.querySelector('.text__description');
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__error'
  });

  pristine.addValidator(hashtagsInput, validateHashtags, getHashtagsError);
  pristine.addValidator(descriptionInput, validateDescription, getDescriptionError);

  form.addEventListener('input', () => {
    pristine.validate(hashtagsInput);
  });

  form.addEventListener('input', () => {
    pristine.validate(descriptionInput);
  });

  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
}
export { validateForm };
