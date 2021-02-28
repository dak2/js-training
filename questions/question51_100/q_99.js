let obj = { foo: 'bar', baz: 42 };
// Mapオブジェクトに変換してください

// 解答
let map = new Map(Object.entries(obj))
// Object.entries => object から 配列変換
// Object.entries(obj) => [["foo", "bar"], ["baz", 42]]


