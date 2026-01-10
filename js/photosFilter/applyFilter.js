import { shufflePhotos } from './shuffleFilter.js';
import { sortByComments } from './discussedFilter.js';
import { renderPhotosTemplate } from '../photosRender/photosRender.js';
import { debounce } from '../utils/debounce.js';
import { DEBOUNCE_DELAY } from '../constants/constants.js';

const filterContainer = document.querySelector('.img-filters');
const delayedRender = debounce((photos) =>{
  resetPhotos();
  renderPhotosTemplate(photos);
}, DEBOUNCE_DELAY);


function applyFilter(photosData, option) {
  let filteredPhotos = [];
  switch (option) {
    case 'filter-random':
      filteredPhotos = shufflePhotos(photosData);
      break;
    case 'filter-discussed':
      filteredPhotos = sortByComments(photosData);
      break;
    default:
      filteredPhotos = photosData;
  }
  return filteredPhotos;
}

function resetPhotos() {
  const picturesContainer = document.querySelector('.pictures');
  const picturesContainerChildren = Array.from(picturesContainer.children);
  picturesContainerChildren.forEach((child) => {
    if (child.classList.contains('picture')) {
      picturesContainer.removeChild(child);
    }
  });
}

function renderFilteredPhotos(event, photosData) {
  if (event.target.classList.contains('img-filters__button')) {
    const selectedFilter = event.target.id;
    const filteredPhotos = applyFilter(photosData, selectedFilter);

    delayedRender(filteredPhotos);

    const activeButton = filterContainer.querySelector('.img-filters__button--active');
    if (activeButton) {
      activeButton.classList.remove('img-filters__button--active');
    }
    event.target.classList.add('img-filters__button--active');
  }
}


function bindFilterChange(photosData) {
  filterContainer.addEventListener('click', (event) => renderFilteredPhotos(event, photosData));
}

export { bindFilterChange };
