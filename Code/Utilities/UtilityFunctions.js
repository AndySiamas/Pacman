const getDistance = (positionOne, positionTwo) => {
  var firstX = positionOne[0];
  var firstY = positionOne[1];
  var secondX = positionTwo[0];
  var secondY = positionTwo[1];

  var differenceX = Math.pow((secondX - firstX), 2);
  var differenceY = Math.pow((secondY - firstY), 2);
  return Math.sqrt(differenceX + differenceY);
}

const isInRange = (numberToCheck, rangeMin, rangeMax) => {
  return numberToCheck >= rangeMin && numberToCheck <= rangeMax;
}