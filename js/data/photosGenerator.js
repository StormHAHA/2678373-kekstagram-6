import {getRandomInteger} from '../utils/randomNums.js';
import {generateCommentsDescription} from './commentsGenerator.js';
import { COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX, LIKES_MIN, LIKES_MAX, COMMENT_ID_MAX } from '../constants/constants.js';
import { createIdFromRangeGenerator } from '../utils/randomNums.js';
function generatePhotosDescription(amount) {
  const commentsIdGenerator = createIdFromRangeGenerator(COMMENT_ID_MAX);

  const photosDescriptionObjects = [];

  for (let i = 1; i < amount + 1; i++ ) {
    const commentsAmount = getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);
    try {
      const photoDesctiption = {
        id : i,
        url: `photos/${i}.jpg`,
        description: `Работаю в Контуре: день ${i}`,
        likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
        comments: generateCommentsDescription(commentsAmount, commentsIdGenerator),
      };
      photosDescriptionObjects.push(photoDesctiption);
    } catch (error) {
      console.error('Error generating photo description:', error);
      break;
    }
  }

  return photosDescriptionObjects;
}


export {generatePhotosDescription};
