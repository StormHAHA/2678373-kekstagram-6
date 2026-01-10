import { EFFECTS } from '../constants/constants.js';


let isInitialized = false;
let currentEffect = EFFECTS.none;

function handleSliderUpdate () {
  const sliderElement = document.querySelector('.effect-level__slider');
  const sliderValue = document.querySelector('.effect-level__value');
  const imagePreview = document.querySelector('.img-upload__preview img');
  const value = sliderElement.noUiSlider.get();
  sliderValue.value = value;
  if (!currentEffect.filter) {
    imagePreview.style.filter = '';
  } else {
    imagePreview.style.filter = `${currentEffect.filter}(${value}${currentEffect.unit})`;
  }
}

function handleEffectChange(evt) {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  const sliderContainer = document.querySelector('.img-upload__effect-level');
  const imagePreview = document.querySelector('.img-upload__preview img');
  const sliderElement = document.querySelector('.effect-level__slider');

  currentEffect = EFFECTS[evt.target.value];

  if (!currentEffect.filter) {
    sliderContainer.classList.add('hidden');
    imagePreview.style.filter = '';
  } else {
    sliderContainer.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: { min: currentEffect.min, max: currentEffect.max },
      step: currentEffect.step,
      start: currentEffect.start,
    });
  }
}

function initSlider() {
  if (isInitialized) {
    return;
  }

  const sliderElement = document.querySelector('.effect-level__slider');
  const sliderContainer = document.querySelector('.img-upload__effect-level');
  const effectsList = document.querySelector('.effects__list');

  noUiSlider.create(sliderElement, {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => Number(value.toFixed(1)),
      from: (value) => parseFloat(value),
    },
  });

  sliderContainer.classList.add('hidden');
  sliderElement.noUiSlider.on('update', handleSliderUpdate);
  effectsList.addEventListener('change', handleEffectChange);

  isInitialized = true;
}

function resetFilters() {
  const sliderElement = document.querySelector('.effect-level__slider');
  const sliderContainer = document.querySelector('.img-upload__effect-level');
  const effectsList = document.querySelector('.effects__list');
  const imagePreview = document.querySelector('.img-upload__preview img');
  const defaultFilter = effectsList.querySelector('#effect-none');

  defaultFilter.checked = true;
  currentEffect = EFFECTS.none;
  sliderContainer.classList.add('hidden');
  imagePreview.style.filter = '';
  sliderElement.noUiSlider.set(100);
}

export { initSlider, resetFilters };
