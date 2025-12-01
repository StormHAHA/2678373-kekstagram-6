import {getRandomInteger} from '../utils/randomNums.js';
import {generateCommentsDescription} from './commentsGenerator.js';
import { COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX, LIKES_MIN, LIKES_MAX } from '../constants/constants.js';

function generatePhotosDescription(amount, idGenerator) {

  const photosDescriptionObjects = [];

  for (let i = 1; i < amount + 1; i++ ) {
    const commentsAmount = getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);
    const photoDesctiption = {
      id : i,
      url: `photos/${i}.jpg`,
      description: `Работаю в Контуре: день ${i}`,
      likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
      comments: generateCommentsDescription(commentsAmount, idGenerator),
    };
    photosDescriptionObjects.push(photoDesctiption);
  }

  return photosDescriptionObjects;
}


export {generatePhotosDescription};
