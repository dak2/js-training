function getKey(k) {
  return `a key named ${k}`;
}

// 上記getKeyを用いて"a key named enabled"のkeyを持つオブジェクトを作成してください。
// 期待する結果: {id: 5, name: "San Francisco", "a key named enabled": true}

// 答え
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};

