// q_59と同じ事をforEachで実装してください

const nameObj = [{name: 'Scott'},{name: 'James'}]
const results = []

// 解答
const appendString = (nameObj) => {
  nameObj.forEach(obj => {
    results.push(obj.name + 'san')
  });
}

// 答え
const nameObj = [{name: 'Scott'},{name: 'James'}];
const results = [];
nameObj.forEach(function(obj, _i){
  for (let key in obj){
    results.push(ele[key] + 'san')
  }
});
results
//['Scottsan', 'Jamessan']
