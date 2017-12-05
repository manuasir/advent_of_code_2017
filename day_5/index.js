

exports.instructionSteps = (input) => {
  const instructions = input.split('\n')
  for(let i=0;i<instructions.length;i++) {
    instructions[i] = Number(instructions[i])
  }
  let count = 0
  let index = 0
  let nextIndex = 0
  do{

    nextIndex = index + instructions[index]
    instructions[index]++
    index=nextIndex
    count++
  }while(nextIndex<instructions.length)
  return count
}
