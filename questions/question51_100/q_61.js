// 下のようにuserというnameとidをプロパティで持ったオブジェクトを再割り当てやmultiple(複数のプロパティ)なobjectを扱う際に簡潔な書き方にしてください

function add (user){
  const name = user.name;
  const id = user.id;
  return `${name} ${id}`;
}

// 答え
// better
function add (user) {
  const { name, id } = user;
  return `${name} ${id}`;
}
// best
function add ({name, id}){
  return `${name} ${id}`;
}
// 後者のadd解説
let obj = { name: "test", id: 11, test: "dd" }
add(obj)
// -> 関数でtestプロパティが設定されていないが、name/idだけを判断して戻り値返す
// -> 逆に関数でtestプロパティが設定されているが、objにtestプロパティがなければ引数が足りない等のエラー起きない