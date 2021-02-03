const aa = ['oo', 'll'];
// 上記をbbにコピーしてaaは['kk', 'jj'];
// が挿入されるように実装してください

// 期待する結果
let aa = ['kk', 'jj'];
let bb = ['oo', 'll']; 

// 解答
const bb = Object.assign({}, aa)
aa[0] = 'kk'
aa[1] = 'jj'

// 答え
let aa = ['oo', 'll'];
let bb = aa.splice(0, aa.length, ['kk','jj'])