// 文字列testの1文字目tを変数index0に代入、2文字目eをindex1に代入、残りを配列restの各要素として出力してください

// ans
const splitString = (str, array) => {
  let index = 0
  let rest = array
  let index0 = ''
  let index1 = ''

  for (let n of str){ 
    if(index == 0) {
      index0 = n 
    } else if(index == 1){
      index1 = n
    } else {
      rest.push(n)
    }
    index +=1
  }
  console.log(index0)
  console.log(index1)
  console.log(rest)
}

console.log(splitString("test", []))

// 別解

//分割代入
let [index0, index1, ...rest] = 'test';
console.log(index0,index1, rest);