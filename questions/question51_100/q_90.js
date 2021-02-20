function add () {
  console.log(this.x)
};

// 新たに変数名objのプロパティとしてkeyをx、valueを5で定義した後、
// addが参照するthisがobjにbindするように呼び出してください。

// 解答
let obj = {
  x: 5,
}

add.bind(obj)()

// 答え
let obj = {
  x: 5
};

add.apply(obj)