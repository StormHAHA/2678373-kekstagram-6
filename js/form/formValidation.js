import { HASHTAGS_MAX_COUNT, HASHTAG_MAX_LENGTH, DESCRIPTION_MAX_LENGTH, HASHTAG_PATTERN } from '../constants/constants.js';
function getHashtagsError(tags) {
  if (!tags) {
    return '';
  }

  const hashtags = tags.trim().split(/\s+/);

  if (hashtags.length > HASHTAGS_MAX_COUNT) {
    return `Нельзя указать больше ${HASHTAGS_MAX_COUNT} хэштегов`;
  }

  const lowerTags = hashtags.map((tag) => tag.toLowerCase());

  for (const tag of hashtags) {
    if (!tag.startsWith('#')) {
      return 'Хэштег должен начинаться с символа #';
    }

    if (!HASHTAG_PATTERN.test(tag)) {
      return 'Хэштег не должен содержать спецсимволы и состоять только из #';
    }

    if (tag.length > HASHTAG_MAX_LENGTH || tag.length < 2) {
      return `Хештег должен быть до ${HASHTAG_MAX_LENGTH} символов`;
    }

    if (lowerTags.filter((t) => t === tag.toLowerCase()).length > 1) {
      return 'Хэштеги должны быть уникальными';
    }
  }

  return '';
}
function getDescriptionError(description) {

  return description.trim().length < DESCRIPTION_MAX_LENGTH ? '' : `Описание не должно превышать ${DESCRIPTION_MAX_LENGTH} символов`;
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
