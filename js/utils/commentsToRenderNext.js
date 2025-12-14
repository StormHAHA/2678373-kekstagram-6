import { COMMENTS_TO_RENDER } from '../constants/constants.js';

function calculateCommentsToRender(currentCommentAmount, commentsDataLength) {
  return Math.min(currentCommentAmount + COMMENTS_TO_RENDER, commentsDataLength);
}

function normalizeCommentsToRenderRange(startComment, endComment, commentsTotalAmount) {
  let normalizedStartComment = startComment;
  let normalizedEndComment = endComment;
  if (!endComment) {
    normalizedEndComment = commentsTotalAmount > COMMENTS_TO_RENDER ? COMMENTS_TO_RENDER : commentsTotalAmount;
  }
  if (!startComment) {
    normalizedStartComment = 0;
  }
  return {startComment: normalizedStartComment, endComment: normalizedEndComment};
}

export {calculateCommentsToRender, normalizeCommentsToRenderRange};
