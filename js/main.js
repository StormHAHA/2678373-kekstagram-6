import { renderPhotosTemplate } from './photosRender/photosRender.js';
import { trackFormUpload } from './form/formModalControl.js';
import { fetchPhotos } from './api/fetchPhotos.js';
import { showToast } from './toasts/fetchErrorToast.js';

fetchPhotos(renderPhotosTemplate, showToast);

trackFormUpload();
