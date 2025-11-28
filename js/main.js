import {generatePhotosDescription} from './data/photosGenerator.js';
import {createRandomIdFromRangeGenerator} from './utils/randomNums.js';


const commentsIdGenerator = createRandomIdFromRangeGenerator(1, 1000);
const photos = generatePhotosDescription(25, commentsIdGenerator);


