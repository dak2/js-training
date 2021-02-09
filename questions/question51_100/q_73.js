// console.logはそれぞれ何を出力するか答えなさい。またそうなる理由を説明してください
var thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();

// 答え
//undefined
//local

// 理由
// 関数内での変数は巻き上げられてjavascriptは下のように解釈をするから
var thing = 'global';
function foo(){
  var thing;//巻き上げ
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();