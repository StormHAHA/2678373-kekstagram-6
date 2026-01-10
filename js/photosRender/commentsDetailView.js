import { calculateCommentsToRender, normalizeCommentsToRenderRange } from '../utils/commentsToRenderNext.js';

let currentComments = [];
let currentEnd = 0;

const commentsContainer = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

function clearComments() {
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  commentsContainer.innerHTML = '';
  currentEnd = 0;
  currentComments = [];
}

function updateCommentsCounterElement(commentsRendered, counterElement) {
  const shownCommentsAmount = document.querySelector('.social__comment-shown-count');
  const totalCommentsAmount = document.querySelector('.social__comment-total-count');
  if (commentsRendered !== 0) {
    const commentsCounterElement = document.querySelector('.social__comment-count');
    commentsCounterElement.classList.remove('hidden');
    shownCommentsAmount.textContent = commentsRendered;
    totalCommentsAmount.textContent = counterElement;
  }
}
function updateLoadMoreElement(commentsRendered, commentsTotalAmount) {
  const loadMoreElement = document.querySelector('.comments-loader');
  loadMoreElement.classList.toggle('hidden', commentsRendered === commentsTotalAmount);
}


function renderCommentsRange(startComment, endComment) {
  const total = currentComments.length;

  const normalizedRange = normalizeCommentsToRenderRange(
    startComment,
    endComment,
    total
  );

  const start = normalizedRange.startComment;
  const end = normalizedRange.endComment;

  updateLoadMoreElement(end, total);
  updateCommentsCounterElement(end, total);

  for (let i = start; i < end; i++) {
    const comment = currentComments[i];

    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('social__picture');
    avatarImg.src = comment.avatar;
    avatarImg.alt = comment.name;
    avatarImg.width = 35;
    avatarImg.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentElement.append(avatarImg, commentText);
    commentsContainer.appendChild(commentElement);
  }
}
function loadMoreComments() {
  const total = currentComments.length;

  if (currentEnd >= total) {
    return;
  }

  const nextEnd = calculateCommentsToRender(currentEnd, total);
  renderCommentsRange(currentEnd, nextEnd);
  currentEnd = nextEnd;
}
function renderComments(commentsData) {
  clearComments();

  currentComments = commentsData;

  const firstEnd = calculateCommentsToRender(0, commentsData.length);
  renderCommentsRange(0, firstEnd);
  currentEnd = firstEnd;
}

commentsLoader.addEventListener('click', loadMoreComments);
export { renderComments, clearComments };
