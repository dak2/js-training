const { test, expect } = require('@jest/globals');
const getSum = require('../question1_50/q_32');

// 関数呼び出し時のエラーをテストしたい場合、expect内で関数をラップする必要がある
// そうしないと関数実行時のエラーが最初に評価され、処理が失敗する
// https://jestjs.io/docs/en/expect#tothrowerror

describe('getSum', () => {
  test('throw error when second argument is undefined', () => {
    expect(() => getSum(2)).toThrow("b is not defined")
  })

  test('throw error when first argument is undefined', () => {
    expect(() => getSum(undefined, 2)).toThrow("a is not defined")
  })
})

