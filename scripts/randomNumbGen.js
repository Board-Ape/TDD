function randomNumbGen(count) {
  let numArray = [];

  for (let i = 0; i < count; i++) {
    let randomNum = Math.round(Math.random() * 100);
    numArray.push(randomNum);
  }
  return numArray;
}

module.exports = randomNumbGen;
