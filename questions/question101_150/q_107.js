// 下記のPromise.allは任意のリクエストが失敗した場合、Promise.all はエラーで reject し、他のすべてのリクエストの結果を失います
// 行 (*) で配列 responses がフェッチに成功したレスポンスオブジェクトと、失敗したエラーオブジェクトを含むようにコードを修正してください。

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remydadsadasadadaaa',
  'https://api.github.com/users/jeresig'
];

Promise.all(urls.map(url => fetch(url)))
  // 各レスポンスに対し、そのステータスを表示
  .then(responses => { // (*)
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`);
    }
  })


// 解答
Promise.all(urls.map(url => fetch(url).catch(err => err)))
  // catchを定義しておけばエラーならエラーオブジェクト
  // エラーでないならレスポンスオブジェクトとして返る
  .then(responses => {
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`);
    }
  })

