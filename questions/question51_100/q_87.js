const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// 不必要な3項演算子を避けて同じ意味を簡潔に書いてください

// 解答
const foo = a || b

// 答え
const foo = a || b
const bar = !!c
const baz = !c

