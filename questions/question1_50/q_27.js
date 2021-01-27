let obj = {x: 2, y: 3}
// と等価をObjectメソッドで生成してください

let obj = Object.create(Object.prototype, {x: {value: 2}, y: {value: 3}})

// [Object.prototype]
// ほとんどすべてのオブジェクトはObject.prototypeプロパティに定義されたprototypeオブジェクトを継承しています。 
// prototypeオブジェクトとは、すべてのオブジェクトの作成時に自動的に追加される特殊なオブジェクトです。 
// Objectのprototypeオブジェクトは、すべてのオブジェクトから利用できるメソッドなどを提供するベースオブジェクトとも言えます。

// 参照 : https://jsprimer.net/basic/prototype-object/#object-is-origin