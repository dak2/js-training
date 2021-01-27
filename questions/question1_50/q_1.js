// 再度挑戦
// const a = { a: 'a' }とconst b = { b: 'b' }をマージする関数を作成してください
const a = { a: 'a' }
const b = { b: 'b' } 

const mergeObject = (a, b) => {
  return { ...a, ...b }
}

module.exports = mergeObject;
