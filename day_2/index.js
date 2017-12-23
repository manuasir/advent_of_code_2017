
// 5 1 9 5
// 7 5 3
// 2 4 6 8 -> this result must be 18

/**
 * Calculates the max number in an array
 * @param arr
 * @return {number}
 */
const max = (arr) => {
  let aux = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > aux) { aux = arr[i] }
  }
  return aux
}

/**
 * Calculates the min number in an array
 * @param arr
 * @return {number}
 */
const min = (arr) => {
  let aux = Number(arr[0])
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < aux) {
      aux = arr[i]
    }
  }
  return aux
}

/**
 * Calculates the checksum of a matrix
 * @param input
 * @return {*}
 */
exports.checkSum = (input) => {
  let sum = []
  let file = []
  let num = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '\t' || input[i] === '\n') {
      file.push(Number(num))
      num = ''
    } else {
      num += String(input[i])
    }
    if (input[i] === '\n') {
      sum.push(max(file) - min(file))
      file = []
    }
  }
  return sum.reduce((a, b) => { return a + b }, 0)
}

/**
 * Obtains the result of the two evenly divisible values in an array
 * @param arr
 */
const checkDivisibleValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] % arr[j] === 0) {
          return arr[i] / arr[j]
        } else if (arr[j] % arr[i] === 0) {
          return arr[j] / arr[i]
        }
      }
    }
  }
}

/**
 * Obtains the sum of the all results of the two evenly divisible values
 * @param input
 * @return {Number}
 */
exports.getEvenlyDivisibleValues = (input) => {
  let sum = []
  let file = []
  let num = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '\t' || input[i] === '\n') {
      file.push(Number(num))
      num = ''
    } else {
      num += String(input[i])
    }
        // process each line here
    if (input[i] === '\n') {
      sum.push(checkDivisibleValues(file))
      file = []
    }
  }
  return sum.reduce((a, b) => { return a + b }, 0)
}
