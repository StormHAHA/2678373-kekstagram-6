function renderComments(commentsData) {
  const commentsContainer = document.querySelector('.social__comments');
  commentsData.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('social__picture');

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');

    avatarImg.src = comment.avatar;
    avatarImg.alt = comment.name;
    avatarImg.width = 35;
    avatarImg.height = 35;
    commentText.textContent = comment.message;

    commentElement.appendChild(avatarImg);
    commentElement.appendChild(commentText);
    commentsContainer.appendChild(commentElement);
  });
}
export { renderComments };
