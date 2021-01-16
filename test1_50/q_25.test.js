const { test, expect } = require('@jest/globals');
const sayHi = require('../question1_50/q_25');

describe('sayHi', () => {
  test('return name and greet with apply', () => {
    expect(sayHi.apply(null, ['name'])).toEqual('hello!name');
  })
})
