// 関数sayHiに自分の名前を引数で渡した際にhello!yourname、何も渡さない場合hello!と返す関数を作成し、それをapplyで実行してください。

// apply
// applyメソッドは第一引数にthisとする値を指定し、第二引数に関数の引数を配列として渡します。
// 関数.apply(thisの値, [関数の引数1, 関数の引数2]);
// 次の例ではthisにpersonオブジェクトを指定した状態でsay関数を呼び出しています。 applyメソッドの第二引数で指定した配列は、自動的に展開されてsay関数の仮引数messageに入ります。

// "use strict";
// function say(message) {
//     return `${message} ${this.fullName}！`;
// }
// const person = {
//     fullName: "Brendan Eich"
// };
// // `this`を`person`にして`say`関数を呼びだす
// // callとは異なり引数を配列として渡す
// console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// // `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
// say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

// *applyの第一引数にnullを渡す場合 -> thisはglobal objectに
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#parameters

function sayHi(name) {
  return name ? `hello!${name}` : 'hello!';
}

console.log(sayHi.apply(null, ['name']))

module.exports = sayHi;