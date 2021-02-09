const input = [0,[1,2,3],4,5,[6]];
// const retuls = [0,1,2,3,4,5,6];
// inputをresultsに変更してください

// 解答
const results = input.flat();

// 別解
const resultsB = [input[0],...input[1],input[2],input[3],...input[4]];