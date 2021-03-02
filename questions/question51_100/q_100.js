// ['a','b','c']を{ 0: 'a’, 1: 'b’, 2: 'c' }にしてください

// 解答
const strArray = ['a','b','c'];
Object.assign({}, strArray);

// 別解
const obj = {}
strArray.forEach((str, index) => {
  obj[index] = str
})

// 答え
function toObject(ary){
  const obj = {};
  for(let i = 0; i < ary.length; i++){
    obj[i] = ary[i];
  }
  return obj
}

toObject(strArray);
