// 関数iを実行すると返り値で関数を受け取り、その関数に引数'Home'を渡し実行すると'MyHome'と返ってくるクロージャーを作ってください

function i(home) {
  let str = "My";
  return function func() {
    return str + home
  }
}

// 参考 : https://jsprimer.net/basic/function-scope/#closure
// クロージャがなぜ動くのか
// https://jsprimer.net/basic/function-scope/#why-closure-work
// -> 静的スコープとメモリ管理の仕組み

// 例
const createCounter = () => {
  let count = 0;
  return function increment() {
      // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
      count = count + 1;
      return count;
  };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

// count変数が自動解放（再実行した際にmyCounterの値が増えているのでcount変数がGCされずに初期化されていない状態）されずに保持できているのは
//「increment関数内から外側のcreateCounter関数スコープにあるcount変数を参照している」ためです。 
// このような性質のことをクロージャー（関数閉包）と呼びます。
// クロージャーは「静的スコープ」と「参照され続けている変数のデータが保持される」という2つの性質によって成り立っています。

