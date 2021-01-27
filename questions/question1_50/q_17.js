// コンストラクタWhoの初期化時に'name'(String)を渡しインスタンスプロパティnameに代入
// インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください 
// ※インスタンスメソッドはprototypeに代入してください

function Who(name){
  this.name = name
}
Who.prototype.getName = function(){
  return this.name 
}
const who = new Who('daichi')
who.getName();

// *アロー関数はnewを使用できないので通常の関数を利用

module.exports = Who;