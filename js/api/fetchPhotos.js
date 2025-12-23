import { PHOTOS_ENDPOINT } from '../constants/constants.js';

function fetchPhotos(onSuccess, onError) {
  fetch(
    PHOTOS_ENDPOINT,
    {
      method: 'GET'
    },
  )
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error(`${responce.status} : ${responce.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
}

export { fetchPhotos };
