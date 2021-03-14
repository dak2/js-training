// 行 (*) で、配列には成功したリクエストに対してはパースされた JSONを、エラーとなったものに対してはエラーを含むようにコードを修正してください。

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// フェッチリクエストを作成
Promise.all(urls.map(url => fetch(url)))
  // 各レスポンスを response.json() にマップする
  .then(responses => Promise.all(
    responses.map(r => r.json())
  ))
  // 各ユーザ名を表示
  .then(users => {  // (*)
    for(let user of users) {
      alert(user.name);
    }
  });


// 解答

Promise.all(urls.map(url => fetch(url).catch(err => err)))
  .then(responses => Promise.all(
    responses.map(r => r instanceof Error ? r : r.json().catch(err => err))
  ))
  .then(results => {
    alert(results[0].name); // Ilya Kantor
    alert(results[1]); // SyntaxError: Unexpected token < in JSON at position 0
    alert(results[2]); // TypeError: failed to fetch (text may vary)
  });
