// ローカルストレージに次のようなオブジェクトを保存後、取得してください。

// 解答
const dataObj = {
  'id': 0010,
  'isFavorite': true
};

// localstorageに設定
for(const key in dataObj) {
  localStorage.setItem(key, dataObj[key])
}

// localstorageから取得
const storage = []

for(const key in dataObj) {
  storage.push(localStorage.getItem(key))
};

// -> ["8", "true"]