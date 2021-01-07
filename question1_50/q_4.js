// ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'

const arr = ['a', 'b'];
arr.forEach((elm, index) => console.log(`${elm}${index}`))

// other answer
arr.forEach(function(elm, index){
  console.log(`${elm}${index}`)
});
