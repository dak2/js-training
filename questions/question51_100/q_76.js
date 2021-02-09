const string = 'TestJavascript';
// TとJだけをそれぞれ変数a,ｂに入れてくだい

// 解答
const [a, b] = string.split('').filter(str => str === str.toUpperCase())

// 答え
const [a,,,,b] = string;