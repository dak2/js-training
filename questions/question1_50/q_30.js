let arr = ['2','23','0','16'];
// を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください

const sort = (arr) => {
  return arr.sort((a, b) => a - b)
}

const readOnly = (arr) => {
  return Object.freeze(arr);
}

module.exports = { sort, readOnly }