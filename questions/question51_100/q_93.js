// 文字列の中で\nがあったら全てを<br>に置き換える正規表現を用いてreplaceしてください

// 解答
const str = '\ntest\ntest\n'

str.replace(/\n/g, '<br>')

// 答え
str.replace(/(?:\r\n|\r|\n)/g, '<br>');
