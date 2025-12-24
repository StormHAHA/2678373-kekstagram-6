const NAMES = ['Андрей', 'Катя', 'Виктор', 'Даня'];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const AVATAR_URLS_INDEX_MIN = 1;
const AVATAR_URLS_INDEX_MAX = 6;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const PHOTOS_COUNT = 25;
const COMMENT_ID_MAX = COMMENTS_COUNT_MAX * PHOTOS_COUNT;
const COMMENTS_TO_RENDER = 5;
const HASHTAGS_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 140;
const HASHTAG_PATTERN = /^#[a-zа-я0-9]+$/i;

const FORM_IMAGE_SCALE_STEP = 25;
const FORM_IMAGE_SCALE_MIN = 25;
const FORM_IMAGE_SCALE_MAX = 100;
const FORM_IMAGE_SCALE_DEFAULT = 100;

const EFFECTS = {
  none: {
    filter: null,
    min: 0,
    max: 100,
    step: 1,
    unit: '',
    start: 100,
  },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    start: 1,
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    start: 1,
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    start: 100,
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
    start: 3,
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
    start: 3,
  },
};

const BASE_URL = 'https://29.javascript.htmlacademy.pro/kekstagram';
const PHOTOS_ENDPOINT = '/data';

export {
  NAMES,
  COMMENTS,
  AVATAR_URLS_INDEX_MIN,
  AVATAR_URLS_INDEX_MAX,
  COMMENTS_COUNT_MIN,
  COMMENTS_COUNT_MAX,
  LIKES_MIN,
  LIKES_MAX,
  PHOTOS_COUNT,
  COMMENT_ID_MAX,
  COMMENTS_TO_RENDER,
  HASHTAGS_MAX_COUNT,
  HASHTAG_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  HASHTAG_PATTERN,
  FORM_IMAGE_SCALE_STEP,
  FORM_IMAGE_SCALE_MIN,
  FORM_IMAGE_SCALE_MAX,
  FORM_IMAGE_SCALE_DEFAULT,
  EFFECTS,
  BASE_URL,
  PHOTOS_ENDPOINT
};
