function clearComments() {
  const commentsContainer = document.querySelector('.social__comments');
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');

  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  commentsContainer.innerHTML = '';
}
export { clearComments };
