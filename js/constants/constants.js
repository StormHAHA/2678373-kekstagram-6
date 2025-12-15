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
export {NAMES, COMMENTS, AVATAR_URLS_INDEX_MIN, AVATAR_URLS_INDEX_MAX, COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX, LIKES_MIN, LIKES_MAX, PHOTOS_COUNT, COMMENT_ID_MAX, COMMENTS_TO_RENDER};
