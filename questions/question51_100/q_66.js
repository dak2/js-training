let string = 'abcdefg'
// cとeそれぞれを大文字にしてください

// 解答1
string.split('').map(str => {
  if(str === 'c') {
    str = 'C'
  }else if(str ===  'e') {
    str = 'E'
  }
  return str
}).join('')

// 解答2
string.split('').map(str => {
  if(str === 'c' || str === 'e') {
    str = str.toUpperCase()
  }
  return str
}).join('')

// 答え
string.replace(/[ce]/g,function(str){
  return str.toUpperCase();
});
