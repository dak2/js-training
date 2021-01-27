// 再度挑戦
// more
// next()を実行しただけ返り値が1増える関数を定義してください


const setUp = () => {
  let count = 0;
  return () => {
    return (count += 1);
  }
};
const next = setUp();

console.log(next());
console.log(next());