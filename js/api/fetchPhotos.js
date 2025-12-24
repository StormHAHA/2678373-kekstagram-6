import { PHOTOS_ENDPOINT, BASE_URL } from '../constants/constants.js';

function fetchPhotos(onSuccess, onError) {
  fetch(
    `${BASE_URL}${PHOTOS_ENDPOINT}`,
    {
      method: 'GET'
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} : ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
}

export { fetchPhotos };
