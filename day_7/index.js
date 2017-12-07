exports.makeTree = (input) => {
  let lines = input.trim().split('\n')
  let tree = []
  for (let line of lines) {
    if (line.indexOf('->') !== -1) {
      const currentValue = line.split('->')[0].split(' ')[0]
      const currentChildren = line.split('->')[1].split(',')
      console.log(currentValue+" : "+currentChildren)


    }
  }
  return tree[0].value
}