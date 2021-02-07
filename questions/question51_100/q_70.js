let obj = {};
obj ? true : false;
// プロパティが空の場合、falseが返るようにしてください

// 解答
!!Object.keys(obj).length

// 答え
Object.keys(obj).length != 0 ? true : false;
