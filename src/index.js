module.exports = function check(str, bracketsConfig) {
  const obj = {}
  bracketsConfig.map(el => obj[el[0]] = el[1])

  const all = []

  for (let one of str) {
    const lastOne = all[all.length - 1]
    if (one in obj) { 
      obj[one] === one && one === lastOne ? all.pop() : all.push(one)
    } else {
      const last = obj[lastOne]
      if (last === one) {
        all.pop()
      } else {
        return false
      }
    }
  }

  return all.length === 0
}
