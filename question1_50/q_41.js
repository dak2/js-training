// ひらがな全てにマッチ、半角カタカナ全てにマッチ、カタカナ全てにマッチする正規表現を記述してください

// ans
const hiragana = /[あ-ん]/
const hankakuKatakana = /[ｱ-ﾝ]/
const katakana = /[ア-ン]/

// answer
const hiragana = /[ぁ-ん]/
const hankakuKatakana = /[ァ-ヶ]/
const katakana = /[ｦ-ﾟ]/

// ひらがな文字コード
// 小文字の「ぁ」から「ん」まで

// カタカナ文字コード
// 小文字の「ァ」から「ヶ」まで