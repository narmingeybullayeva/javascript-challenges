function titleCase(sentence) {
  let arr = sentence.split(" ")
  return arr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ")
}

module.exports = titleCase
