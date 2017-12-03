// Inverse Captcha
// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

/**
 * Calculates the sum of the duplicated elements
 * @param str
 */
exports.resolveCaptcha = (str) => {
  let duplicates = []
  let flagValue = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === flagValue) {
      duplicates.push(Number(str[i]))
    } else {
      flagValue = str[i]
    }
    if (i === str.length - 1) {
      if (str[0] === str[i]) { duplicates.push(Number(str[i])) }
    }
  }
  return duplicates.reduce((a, b) => { return a + b }, 0)
}

// 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// 1221 produces 0, because every comparison is between a 1 and a 2.
// 123425 produces 4, because both 2s match each other, but no other digit has a match.
// 123123 produces 12.
// 12131415 produces 4.

/**
 * Calculates the sum of the halfway around duplicated elements
 * @param str
 */
exports.resolveCaptchaHalfwayAround = (str) => {
  let duplicates = []
  const steps = str.length / 2
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + steps]) {
      duplicates.push(Number(str[i]) + Number(str[i + steps]))
    }
  }
  return duplicates.reduce((a, b) => { return a + b }, 0)
}
