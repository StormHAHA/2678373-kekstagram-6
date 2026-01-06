import {RANDOM_PHOTOS_AMOUNT} from '../constants/constants.js';
import { genetareUniqueRandomValue } from '../utils/randomNums.js';
function shufflePhotos(photosData) {
  const shuffledPhotos = [];
  const randomIndex = genetareUniqueRandomValue(0, photosData.length - 1);
  for (let i = 0; i < RANDOM_PHOTOS_AMOUNT; i++) {
    const index = randomIndex();
    shuffledPhotos.push(photosData[index]);
  }
  return shuffledPhotos;
}

export { shufflePhotos };
