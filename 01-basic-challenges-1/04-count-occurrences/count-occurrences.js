function countOccurrences(word, letter) {
  let count = 0
  let new_word = word.toLowerCase()
  for (let i = 0; i < new_word.length; i++) {
    if (word[i] === letter) {
      count++
    }
  }

  return count
}

console.log(countOccurrences("hello", "y"))

module.exports = countOccurrences
