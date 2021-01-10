// ['a', 'b']の各要素にindex値を足してくださいe.g 'a0'と'b1'

const arr = ['a', 'b'];

const withIndex = (array) => {
  array.forEach((elm, index) => {
    array[index] = array[index] + index
  });
  return array;
}

// other answer
// arr.forEach(function(elm, index){
//   console.log(`${elm}${index}`)
// });

module.exports = withIndex;