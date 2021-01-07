// const arr = ['aa','bb','cc','dd','ee','ff','gg'];のdd,ee,ffを新たな配列として返してください

const arr = ['aa','bb','cc','dd','ee','ff','gg'];

console.log(arr.filter(v => ['dd', 'ee', 'ff'].includes(v)))

// or console.log(arr.slice(3, -1))

