// 再度挑戦
// const fafa = Factory('morita');
// fafa.introduce()
// //'morita'
// 上記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つFactory関数を定義しなさい。

function Factory(name) {
  function getName() {
    return name;
  }
  return {
    introduce: function() {
      return getName()
    }
  }
}

module.exports = Factory;