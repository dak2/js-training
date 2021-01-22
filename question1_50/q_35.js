// 1234という数字を文字列に変更後、それぞれ分割して配列の要素としてインデックス順に格納してください

const ary = [...Number(1234).toString().split('')]
console.log(ary)
[ '1', '2', '3', '4' ]

// 別解
const count = 1234;
const ee = count.toString();
const arr = [];
for(const i = 0; i < ee.length; i++){
  arr[i] = ee.charAt(i);
}
console.log(arr)//['1','2','3','4'];