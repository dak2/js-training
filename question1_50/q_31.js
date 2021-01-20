const arr = [3,4,5];
// をconcat以外で新たな配列としてarr2にコピーしてください。
// その後arr2[0]= 123を代入するとarrは何を出力するか答えなさい

const arr2 = []

arr.forEach(num => {
  arr2.push(num)
})
console.log(arr)
console.log(arr2)
arr2[0] = 123
console.log(arr2)

// 別解1
let arr = [3,4,5];
let arr2 = arr.slice(0, arr.length);

// 別解2
let arr2 = arr.map(ele => ele);
arr2