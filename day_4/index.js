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
    if (temp.includes(word)) { isValid = false } else { temp.push(word) }
  }

  return isValid
}

exports.howManyPassAreValid = (input) => {
  const passphrases = input.split('\n')
  let count = 0
  for (let passphrase of passphrases) {
    if (this.isValidPassphrase(passphrase)) { count++ }
  }
  return count
}

exports.howManyPassChecksumAreValid = (input) => {
  const phrases = input.trim().split('\n')
  const noRepeats = (w, _, ws) => ws.filter(v => v === w).length === 1
  const sortLetters = w => [...w].sort().join('')
  const isValid = f => ph => ph.split(' ').map(f).every(noRepeats)
  const count = f => phrases.filter(isValid(f)).length
  return [w => w, sortLetters].map(count)[1]
}
