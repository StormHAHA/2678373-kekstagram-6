import {getRandomInteger} from '../utils/randomNums.js';
import { NAMES, COMMENTS, AVATAR_URLS_INDEX_MIN, AVATAR_URLS_INDEX_MAX } from '../constants/constants.js';


function generateCommentsDescription(commentsCount, commentId) {
  const commentsDescriptionObjects = [];
  for (let i = 0; i < commentsCount; i++) {
    const commentCount = getRandomInteger(1, 2);
    let message = '';
    for (let j = 0; j < commentCount; j++) {
      message += COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
      if (j === 0 && commentCount === 2) {
        message += ' ';
      }
    }
    const commentDescription = {
      id : commentId(),
      avatar: `img/avatar-${getRandomInteger(AVATAR_URLS_INDEX_MIN, AVATAR_URLS_INDEX_MAX)}.svg`,
      message: message,
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    };
    commentsDescriptionObjects.push(commentDescription);
  }
  return commentsDescriptionObjects;
}

export {generateCommentsDescription};
