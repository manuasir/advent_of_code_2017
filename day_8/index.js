let map = {}
let globalMax = 0
const processInput = (input) => {
  map = {}
  globalMax = 0
  const inp = input.trim().split('\n')
  inp.map((o) => { map[o.split(' ')[0]] = 0; return 0 })
  return inp
}

const processCondition = (str) => {
  const leftOp = str.trim().split(' ')[0]
  const condition = str.trim().split(' ')[1]
  const rightOp = Number(str.trim().split(' ')[2])
  switch (condition) {
    case '==' : return map[leftOp] === rightOp
    case '>' : return map[leftOp] > rightOp
    case '<' : return map[leftOp] < rightOp
    case '<=' : return map[leftOp] <= rightOp
    case '>=' : return map[leftOp] >= rightOp
    case '!=' : return map[leftOp] !== rightOp
  }
}

const processOperation = (str) => {
  const register = str.split(' ')[0].trim()
  const instruction = str.split(' ')[1].trim()
  const amount = Number(str.split(' ')[2].trim())
  switch (instruction) {
    case 'inc': {
      map[register] += amount
      if (map[register] > globalMax) { globalMax = map[register] }
      break
    }
    case 'dec': {
      map[register] -= amount
      if (map[register] > globalMax) { globalMax = map[register] }
      break
    }
  }
}

const getMax = (data) => {
  let max = 0
  for (let item in data) {
    if (data[item] > max) { max = data[item] }
  }
  return max
}
exports.process = (input) => {
  const data = processInput(input)
  for (let line of data) {
    if (processCondition(line.split('if')[1])) {
      processOperation(line.split('if')[0])
    }
  }
  return getMax(map)
}

exports.maxHeld = () => {
  return globalMax
}
