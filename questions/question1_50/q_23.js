// カリー化されたadd(1)(2)もしくはadd(1,2) を実行した際両方とも返り値3になる関数を定義しなさい
// カリー化
// 引数が複数の際に関数を返す関数
// ex. const add = (x) => (y) => (x + y)
// add(1)(2) -> 3
// 上記によってadd(1)の関数に引数2を挿入した結果が返る

// arrow function
const addCurry = (x) => (y) => (x + y)
const add = (x, y) => (x + y)

// function
// function addCurry(x, y) {
//   return function (y) {
//     return x + y;
//   }
// }

module.exports = { addCurry, add };

