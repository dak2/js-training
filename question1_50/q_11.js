// 再度挑戦
// next()を実行しただけ返り値が1増える関数を定義してください

let i = 0;
const addOne = () => {
  i+=1;
  return i;
}
console.log(addOne());
console.log(addOne());

// const setUp = () => {
//   let count = 0;
//   return () => {
//     return (count += 1);
//   }
// };
// const next = setUp();