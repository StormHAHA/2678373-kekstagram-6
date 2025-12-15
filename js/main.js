import {generatePhotosDescription} from './data/photosGenerator.js';
import { PHOTOS_COUNT } from './constants/constants.js';
import { renderPhotosTemplate } from './photosRender/photosRender.js';
import { bindPhotoDetailView } from './utils/bindPhotosDetailView.js';
import { trackFormUpload } from './form/formModalControl.js';
import { validateForm } from './form/formValidation.js';
const photos = generatePhotosDescription(PHOTOS_COUNT);
const photosElements = renderPhotosTemplate(photos);
try {
  bindPhotoDetailView(photosElements, photos);
} catch (error) {
  console.error('Error binding photo detail view:', error);
}
trackFormUpload();
validateForm();
