for (var i=0; i<5; i++) {
  setTimeout(function(){
      console.log(i);
  }, 1000 * (i+1));
}

// 1秒ごとに1からインクリメントされた値が出力されることを期待しているが、実際は5が5回出力される。理由を答えよ。

// 1. varはブロックスコープを無視
// varはブロックスコープを無視して、もっとも近い関数スコープの直下に宣言部分が巻き上げられり。
// 今回のfor文でも同様に、loop内でスコープを持っておらず、毎度iの値を上書きしている。

// 2. for文の処理が完了後にcallback関数が発火される。
// setTimeout内の関数は0ms,100ms,200ms後に発火するようにcallbackタスクキュー内に入り、その後に関数が発火。
// 関数が発火するタイミングでは、varの値がloop後の値になってしまい、結果iの値が3の状態ですべての関数が発火するので、undefinedが返ることになる。

// 解決策 : ブロックスコープを作成する
// 1. クロージャ

for (var i=0; i<5; i++) {
  (function(num){
    setTimeout(function(){
      console.log(num);
    }, 1000 * (i+1));
  })(i);
}

// 2. let
// letの場合、ブロックスコープを持つ。
// for文でループが回るたびにスコープをもつことになるため、callback関数が参照するiの値もsetTimeoutで登録されたときの値になる
for (let i=0; i<5; i++) {
  setTimeout(function(){
    console.log(i);
  }, 1000 * (i+1));
}