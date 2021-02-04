const aa = ['ii', 'jj', 'kk'];
// 'jj'要素を削除するために deleteを使った場合とspliceを使った場合の違いは何か。

// 解答
// 1. delete
let bb = {...aa}
delete bb[1]

// 2. splice
aa.splice(1,1)

// 違い
// objectに変換するかしないか

// 答え
// -> arrayにもこれで適用できる
delete aa[1]

// 違い
// 削除されたindexの要素を残すか残さないか
delete aa[1]
// ["ii", empty, "kk"]
aa.splice(1,1)
aa
// ["ii", "kk"]


