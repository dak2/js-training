// const array = ['a1','a2','a3','a4','a5']
// の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を'/'区切りで配列に直してください

const array = ['a1','a2','a3','a4','a5'];
const mergeString = array.join('/');
console.log(mergeString);
console.log(mergeString.split('/'));
