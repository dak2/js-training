const value = 0;
const target = value || 10
target

// jsで0はfalseのためvalueが0の場合falseになり10が返る
// valueが0の場合もtargetに0が代入されるようにしてください

// 解答
const value = 0;
const target = value === 0 ? value : 10
target

// 答え
const value = 0;
const target = (value !== undefined) ? value : 10;
value