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
  const arr1 = tree.map((o)=> { return o.value})
  const arr2 = tree.map((o) => { if (o.children) return o.children}).join().split(',')
  return arr1.filter(x => arr2.indexOf(x) === -1).join()
}