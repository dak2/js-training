// "abcdefg"のような文字列をインデックスと値を持ったオブジェクトに変更してください 
// 期待する結果。 {0:a,1:b,2:c,3:d,4:e,5:f,6:g}

const string = "abcdefg"

// 解答
// https://stackoverflow.com/questions/4215737/convert-array-to-object
Object.assign({}, string.split(''));

// 答え
Object.prototype.valueOf.call(str)