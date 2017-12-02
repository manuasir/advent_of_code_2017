// Inverse Captcha
// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

let input = '91212129'

/**
 * Calculates the sum of the duplicated elements
 * @param str
 */
const resolveCaptcha = (str) => {
  let duplicates = []
  let flagValue = str[0]
  for (let i=1;i<str.length;i++) {
    if (str[i] === flagValue) {
      duplicates.push(Number(str[i]))
    } else {
      flagValue = str[i]
    }
    if (i === str.length-1 ) {
      if(str[0] === str[i])
        duplicates.push(Number(str[i]))
    }
  }
  return duplicates.reduce((a, b) => { return a + b },0)
}

console.log(resolveCaptcha(input))
