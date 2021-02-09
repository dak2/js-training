const a = 1;
const b = 'goodday';
// aを'goodday'、bを1として出力されるようにしてください

// 解答
let tmp;
tmp = a
a = b
b = tmp

// 答え
[a,b] = [b, a]