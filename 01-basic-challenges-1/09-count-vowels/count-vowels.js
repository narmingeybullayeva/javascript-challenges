function countVowels(str) {
  const vowels = "aieou"
  const count = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] in vowels) {
      count += 1
    }
  }
  console.log(count)
}

module.exports = countVowels
