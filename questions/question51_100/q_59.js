// [{name: 'Scott'},{name: 'James'}]の要素のvalueを次のように書き出してください
// 期待する結果 ['Scottsan', 'Jamessan']

const nameObj = [{name: 'Scott'},{name: 'James'}]

// 解答
const appendString = (nameObj) => {
  return nameObj.flatMap(obj => {
    return Object.values(obj) + 'san' 
  })
}

// 答え
const nameObj = [{name: 'kenji'},{name: 'morita'}];
const result = nameObj.map(function(ele, _i){
  return ele.name + 'san';
});
result

module.exports = appendString
