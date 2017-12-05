/**
 * Returns is a passphrase is valid or not
 * @param passphrase
 * @return {boolean}
 */
exports.isValidPassphrase = (passphrase) => {
  let isValid = true
  let allWords = passphrase.split(' ')
  let temp = []
  for (let word of allWords) {
    if (temp.includes(word))
      isValid = false
    else
      temp.push(word)
  }

  return isValid
}

exports.howManyPassAreValid = (input) => {
  const passphrases = input.split('\n')
  let count = 0
  for (let passphrase of passphrases) {
    if(this.isValidPassphrase(passphrase))
      count++
  }
  return count
}

exports.howManyPassChecksumAreValid = (input) => {
  const passphrases = input.split('\n')
  let count = 0
  for (let passphrase of passphrases) {
    if(this.isValidCheckSum(passphrase))
      count++
  }
  return count
}

exports.isValidCheckSum = (passphrase) => {
  let isValid = true
  let allWords = passphrase.split(' ')
  let temp = []
  for (let word of allWords) {
    let checkSum = this.checkSum(word)
    if (temp.includes(checkSum))
      isValid = false
    else
      temp.push(checkSum)
  }
  return isValid
}

exports.checkSum = (input) => {
  let sum = 0
  for(let i=0;i<input.length;i++){
    sum+=input[i].charCodeAt(0)
  }
  return sum
}
