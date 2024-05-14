function findMaxNumber(arr) {
  return arr.sort((a, b) => a - b).at(-1)
}

module.exports = findMaxNumber
