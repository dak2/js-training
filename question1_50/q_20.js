// ['B', 'a', 'c', 'e', 'k']
// を大文字小文字区別なく順番通りにしてください。期待する値['a','B','c', 'e','k']
// *sortの比較方法
// array = [a,b,c,d,e]
// a > bならaをbの後ろに並び替える（昇順）

const alphabet = ['B', 'a', 'c', 'e', 'k'];

const alphabetize = (alphabet) => {
  alphabet.sort(function (a, b) {
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return (a > b) ?  1 : (b > a) ? -1 : 0;
    // if (nameA < nameB) {
    //   return -1;
    // }
    // if (nameA > nameB) {
    //   return 1;
    // }
  
    // names must be equal
    // return 0;
  })
  return alphabet;
}


module.exports = alphabetize;