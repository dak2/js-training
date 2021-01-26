// function getSomething(){
//   return {
//     first: 1,
//     second: 2,
//     third: 3
//   }
// }
// 上記の関数で返しているオブジェクトのfirst,second,thirdのvalue値をそれぞれ 変数first,second,thirdに代入してください

// ans 
let first;
let second;
let third;

function getSomething(){
  first = 1
  second = 2
  third = 3
  return {
    first: 1,
    second: 2,
    third: 3
  }
}

// 別解

function getSomething(){
  return {
    first: 1,
    second: 2,
    third: 3
  }
}

let { first, second ,third } = getSomething()
