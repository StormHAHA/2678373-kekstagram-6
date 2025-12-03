
function renderPhotosTemplate(data) {
  const photosData = data;
  const template = new DocumentFragment();
  for (let i = 0; i < photosData.length; i++) {
    const pictureContainer = document.createElement('a');
    pictureContainer.classList.add('picture');
    pictureContainer.href = '#';

    // Рендер картинки
    const picImg = document.createElement('img');
    picImg.classList.add('picture__img');
    picImg.src = photosData[i].url;
    picImg.alt = photosData[i].description;
    picImg.width = '182';
    picImg.height = '182';

    // Рендер описания
    const picDesciptionSection = document.createElement('p');
    picDesciptionSection.classList.add('picture__info');

    const picComments = document.createElement('span');
    picComments.classList.add('picture__comments');
    picComments.textContent = photosData[i].comments.length;

    const picLikes = document.createElement('span');
    picLikes.classList.add('picture__likes');
    picLikes.textContent = photosData[i].likes;
    picDesciptionSection.appendChild(picComments);
    picDesciptionSection.appendChild(picLikes);

    pictureContainer.appendChild(picImg);
    pictureContainer.appendChild(picDesciptionSection);

    template.appendChild(pictureContainer);
  }
  const picturesContainer = document.querySelector('.pictures');
  picturesContainer.appendChild(template);
}


export {renderPhotosTemplate};
