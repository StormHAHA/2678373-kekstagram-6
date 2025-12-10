import {generatePhotosDescription} from './data/photosGenerator.js';
import { PHOTOS_COUNT } from './constants/constants.js';
import { renderPhotosTemplate } from './photosRender/photosRender.js';
import { bindPhotoDetailView } from './utils/bindPhotosDetailView.js';
const photos = generatePhotosDescription(PHOTOS_COUNT);
const photosElements = renderPhotosTemplate(photos);
try {
  bindPhotoDetailView(photosElements, photos);
} catch (error) {
  console.error('Error binding photo detail view:', error);
}
