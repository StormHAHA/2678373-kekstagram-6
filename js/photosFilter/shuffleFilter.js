import {RANDOM_PHOTOS_AMOUNT} from '../constants/constants.js';

function shufflePhotos(photosData) {
  const result = [...photosData];
  const len  = result.length;

  for (let i = 0; i < RANDOM_PHOTOS_AMOUNT; i++) {
    const j = i + Math.floor(Math.random() * (len - i));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, RANDOM_PHOTOS_AMOUNT);
}

export { shufflePhotos };
