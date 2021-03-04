// 組み込み関数 setTimeout はコールバックを使用します。promise ベースで代替のものを作成してください。
// 関数 delay(ms) は promise を返す必要があります。
// その promise は ms ミリ秒後に解決され、そこへ .then を追加することができます。次のようになります:

function delay(ms) {
  // あなたのコード
}

delay(3000).then(() => alert('runs after 3 seconds'));

// 解答
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

// 答え
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
