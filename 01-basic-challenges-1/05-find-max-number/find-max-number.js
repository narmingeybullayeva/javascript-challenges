// solution 1

function findMaxNumber(arr) {
  let max_num = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max_num) {
      max_num = arr[i]
    }
  }

  return max_num
}

// solution 2

function findMaxNumber(arr) {
  return arr.sort((a, b) => a - b).at(-1)
}

module.exports = findMaxNumber
