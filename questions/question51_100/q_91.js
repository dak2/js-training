function add (y, z) {
  console.log(this.x, y + z)
};

// この関数に { x: 3 } をbindさせて、yは5,zは6となるように実行してください。

// 解答
add.bind({x: 3})(5, 6)

// 解答
//apply
add.apply({x: 3}, [5, 6])

//call
add.call({x: 3}, 5, 6)

