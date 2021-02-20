const people = [
  {
    name: "john",
    family: {
      mother: "john Smith"
    },
    age: 24
  },
  {
    name: "Brown",
    family: {
      mother: "Brown Smith"
    },
    age: 27
  }
];

// 下記のように出力してください
// Name john, Mother: jone Smith
// Name Brown, Mother: Brown Smith

// 解答
people.map(obj => {
  console.log(`Name ${obj['name']}, Mother: ${obj['family']['mother']}`)
})


// 答え
for (let {name: n, family: {mother : f}} of people){
  console.log("Name " + n + ", Mother: " + f);
}