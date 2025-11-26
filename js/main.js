function generatePhotosDescription(amount, generator) {
  const Names = [
    'Андрей',
    'Катя',
    'Виктор',
    'Даня'
  ];
  const Comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const commentId = generator;

  function generateCommentsDescription(commentsCount) {
    const commentsDescriptionObjects = [];
    for (let i = 0; i < commentsCount; i++) {
      const commentDescription = {
        id : commentId(),
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: getRandomInteger(0, 1) ? Comments[getRandomInteger(0, 5)] : Comments[getRandomInteger(0, 5)] + Comments[getRandomInteger(0, 5)],
        name: Names[getRandomInteger(1, 3)]
      };
      commentsDescriptionObjects.push(commentDescription);
    }
    return commentsDescriptionObjects;
  }

  const photosDescriptionObjects = [];

  for (let i = 1; i < amount + 1; i++ ) {
    const commentsAmount = getRandomInteger(0, 30);
    const photoDesctiption = {
      id : i,
      url: `photos/${i}.jpg`,
      description: `Работаю в Контуре: день ${i}`,
      likes: getRandomInteger(15, 200),
      comments: generateCommentsDescription(commentsAmount),
    };
    photosDescriptionObjects.push(photoDesctiption);
  }

  return photosDescriptionObjects;
}

// util
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const commentsIdGenerator = createRandomIdFromRangeGenerator(1, 1000);
const photos = generatePhotosDescription(25, commentsIdGenerator);
console.log(photos);


