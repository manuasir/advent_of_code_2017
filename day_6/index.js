/**
 *
 * @param arr
 * @return {{value: number, index: number}}
 */
exports.getMax = (arr) => {
  let max = {value:0,index:0}
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max.value)
      max.value=Number(arr[i])
    max.index=i
  }
  return max
}


/**
 *
 * @param input
 */
exports.memoryDistribution = (input) => {
  let blocks = input.trim().split('\t').map(Number)
  let key = blocks.join(',')
  let steps = 0
  let configs = {}
  while(configs[key] === undefined){
    configs[key] = steps

    let highest = 0
    blocks.map((block, idx) => { highest = (blocks[idx] > blocks[highest]) ? idx : highest })

    let  distro = blocks[highest]
    blocks[highest] = 0

    while(distro){
      blocks[++highest % blocks.length]++
      distro--
    }
    key = blocks.join(',')
    steps++
  }
  return[steps, steps - configs[key]]

}

