module.exports = random;

function random (max, min) {
  // Maximum integer per ECMA javascript standard of 2^53 - 1
  max || (max = 9007199254740991);
  min || (min = 0);

  return min + Math.floor(Math.random() * (max - min));
}
