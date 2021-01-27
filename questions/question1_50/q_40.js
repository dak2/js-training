// 'It is an important problem'と'The import duty is not cheap'の文字列内importにマッチするとbooleanを返す記述をしてください

// ans
const regex = /import/
regex.test('It is an important problem')
regex.test('The import duty is not cheap')

// ans
const regex2 = /.*\bimport.*/
regex2.test('It is an important problem')
regex.test('The import duty is not cheap')

// .* は 0文字以上の任意の文字列
// \b は 単語の区切り位置
// 例）\bam\b → amという単語


