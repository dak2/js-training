// "apple banana orenge"の文字列を空白で区切り、
// それそれの「単語」をObjectのkey値として取得できるようにしてください。 
// 期待する結果。 {0: "apple", 1: "banana", 2: "orenge"}

const string = "apple banana orenge"

// 解答
Object.assign({}, string.split(' '))

// 別解
obj = {}
string.split(' ').forEach(function(elem,i){
  obj[i] = elem;
});
