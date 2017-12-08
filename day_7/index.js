exports.makeTree = (input) => {
  let lines = input.trim().split('\n')
  let tree = []
  for (let line of lines) {
    const currentValue = line.split('->')[0].split(' ')[0].trim()
    if (line.indexOf('->') !== -1) {
      const currentChildren = line.split('->')[1].split(',').map(o=>o.trim())
      tree.push({value:currentValue, children:currentChildren})
    } else {
      tree.push({value:currentValue})
    }
  }
  return tree.map((o)=> { return o.value}).filter(x => tree.map((o) => { if (o.children) return o.children}).join().split(',').indexOf(x) === -1).join()
}