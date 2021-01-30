var foo = 'foo';
function bar(){};
class Baz{
  baz(){}
}

// 上記を別のファイルにexport、個別のメンバとして読み込む記述を示してください
// またfoo変数を「module」というエイリアスで定義しなさい

// ans
// foo, bar, Bazをimport
// import { foo, bar, Baz } from "./q_55";

// fooのエイリアスをmoduleとしてimport
// import { foo as module } from "./q_55";

// 全てimport 
// import * from "./q_55";