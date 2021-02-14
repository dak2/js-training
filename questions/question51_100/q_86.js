function concatAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// 渡ってきたすべての引数を結合して文字列として返す上記の関数を端的に書き換えてください

// 解答
function concatAll() {
  const args = [...arguments];
  return args.join('');
}

// 別解
function concatAll() {
  const args = Array.from(arguments);
  return args.join('');
}

// 答え
function concatenateAll(...args) {
  return args.join('');
}