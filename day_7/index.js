exports.makeTree = (input) => {
  let lines = input.trim().split('\n')
  let tree = []
  for (let line of lines) {
    const currentValue = line.split('->')[0].split(' ')[0].trim()
    if (line.indexOf('->') !== -1) {
      const currentChildren = line.split('->')[1].split(',').map(o => o.trim())
      tree.push({value: currentValue, children: currentChildren})
    } else {
      tree.push({value: currentValue})
    }
  }
  return tree.map((o) => { return o.value }).filter(x => tree.map((o) => { if (o.children) return o.children }).join().split(',').indexOf(x) === -1).join()
}

exports.reduceWeight = (inp) => {
  const input = inp.trim().split('\n')
  const parse = s => s.match(/(\w+) \((\d+)\)(?: -> (.+))?/)
  const towerMap = input.map(parse).reduce((o, [, key, w, nodes]) =>
        Object.assign(o, { [key]: { key, w: +w, nodes: nodes && nodes.split(', ') } }), {})
  const towers = Object.values(towerMap)
  const isNotAParentOf = ({ key }) => ({ nodes }) => !nodes || !nodes.includes(key)
  const head = towers.filter(t => towers.every(isNotAParentOf(t)))[0]

// Only for arrays with at least 2 elements and only one outlier
  const getNorm = ([x, y, z]) => (x === y ? x : z)
  const findOutlier = a => (norm => ({ i: a.findIndex(x => x !== norm), norm }))(getNorm(a))
  const sum = a => a.reduce((acc, x) => acc + x, 0)
  const correctError = ({ w, nodes }) => {
    if (!nodes) return [w, 0]
    const rec = nodes.map(key => correctError(towerMap[key]))
    const ws = rec.map(res => res[0])
    const fix = (rec.find(res => res[1]) || [])[1] || 0
    const { i, norm } = findOutlier(ws)
    if (fix || i < 0 || !norm) return [w + ws[0] * ws.length, fix] // weights are already fixed
    return [w + sum(ws) + norm - ws[i], towerMap[nodes[i]].w + norm - ws[i]]
  }
  return correctError(head)[1]
}
