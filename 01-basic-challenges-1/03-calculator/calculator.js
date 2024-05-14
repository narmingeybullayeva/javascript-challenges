// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       result = a + b
//       break
//     case "-":
//       result = a - b
//       break
//     case "*":
//       result = a * b
//       break
//     case "/":
//       result = a / b
//       break
//     default:
//       throw new Error("Invalid operator")
//   }
//   return result
// }

function calculator(a, b, operator) {
  if (operator == "+") {
    return a + b
  }
  if (operator == "-") {
    return a - b
  }
  if (operator == "*") {
    return a * b
  }
  if (operator == "/") {
    return a / b
  } else {
    throw new Error("Invalid operator")
  }
}

module.exports = calculator
