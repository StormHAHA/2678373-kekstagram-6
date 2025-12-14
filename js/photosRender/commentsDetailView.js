import { calculateCommentsToRender, normalizeCommentsToRenderRange } from '../utils/commentsToRenderNext.js';

function onLoadMoreClick(commentsData, startComment, endComment) {
  const totalCommentsAmount = commentsData.length;
  return () => {
    if (endComment === totalCommentsAmount) {
      return;
    }

    const nextStartComment = endComment;
    const nextEndComment = calculateCommentsToRender(endComment, totalCommentsAmount);

    renderComments(commentsData, nextStartComment, nextEndComment);
  };
}
function updateCommentsCounterElement(counterElement, commentsRendered) {
  if (commentsRendered !== 0) {
    counterElement.classList.remove('hidden');
    counterElement.firstChild.textContent = `${commentsRendered  } из `;
  }
}
function updateLoadMoreElement(loadMoreElement, commentsRendered, commentsTotalAmount) {
  loadMoreElement.classList.toggle('hidden', commentsRendered === commentsTotalAmount);
}
function renderComments(commentsData, startComment, endComment) {
  const commentsContainer = document.querySelector('.social__comments');
  const renderedCommentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const totalCommentsAmount = commentsData.length;
  const normalizedRange = normalizeCommentsToRenderRange(startComment, endComment, totalCommentsAmount);
  startComment = normalizedRange.startComment;
  endComment = normalizedRange.endComment;
  updateLoadMoreElement(commentsLoader, endComment, totalCommentsAmount);
  updateCommentsCounterElement(renderedCommentsCount, endComment, totalCommentsAmount);
  for (let i = startComment; i < endComment; i++) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('social__picture');

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');

    avatarImg.src = commentsData[i].avatar;
    avatarImg.alt = commentsData[i].name;
    avatarImg.width = 35;
    avatarImg.height = 35;
    commentText.textContent = commentsData[i].message;

    commentElement.appendChild(avatarImg);
    commentElement.appendChild(commentText);
    commentsContainer.appendChild(commentElement);
  }
  commentsLoader.addEventListener('click', onLoadMoreClick(commentsData, startComment, endComment), {once: true});

}

export { renderComments };
