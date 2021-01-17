let obj = {x : 2, y: 3};
// このobjをプロパティ追加不可、削除変更は可能にし、
// プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
Object.preventExtensions(obj);
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
Object.isExtensible(obj)//true
Object.keys(obj);
//['x', 'y']
