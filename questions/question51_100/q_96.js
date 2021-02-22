// 下のようなlocation.searchの返り値を想定した文字列がある。 
// '?id=12345&category=script&isname=true’
// id, category, isnameをオブジェクトのkeyに設定、値をオブジェクトの値として設定してください
// 期待する結果 {id: "12345", category: "script", isname: "true"}

// 解答
const searchParams = '?id=12345&category=script&isname=true'
const params = searchParams.slice(1)
const splitParams = params.split('&')

const obj = {}
splitParams.map(params => {
  let keyValue = []
  keyValue.push(params.split('='))
  obj[keyValue[0][0]] = keyValue[0][1]
})

// 答え
const locationsearch = '?id=12345&category=script&isname=true';
const result = {};
locationsearch.substring(1).split("&").forEach(function(ele, i){
  let key =  ele.split("=");
  result[key[0]] = decodeURIComponent(key[1]);
})