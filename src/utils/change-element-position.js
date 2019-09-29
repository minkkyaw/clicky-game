const getRandomIndex = length => {
  let randomIndexArr = [];
  while (randomIndexArr.length < length) {
    let randomNumber = Math.floor(Math.random() * length);
    if (!randomIndexArr.includes(randomNumber))
      randomIndexArr.push(randomNumber);
  }
  return randomIndexArr;
};

const changeElementPosition = arr => {
  let changedArr = getRandomIndex(arr.length).map(idx => arr[idx]);
  return changedArr;
};

const arrToObj = arr => {
  return arr.map((ele, i) => ({ id: i, imageUrl: ele }));
};

module.exports = { changeElementPosition, arrToObj };
