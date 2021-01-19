const { test, expect } = require('@jest/globals');
const { sort, readOnly } = require('../question1_50/q_30');

const arr = ['2','23','0','16'];

// 関数呼び出し時のエラーをテストしたい場合、expect内で関数をラップする必要がある
// そうしないと関数実行時のエラーが最初に評価され、処理が失敗する
// https://jestjs.io/docs/en/expect#tothrowerror

describe('test read-only array', () => {
  test('do not change array after freeze', () => {
    expect(() => readOnly(sort(arr)).push('8')).toThrow(TypeError);
  })
})

