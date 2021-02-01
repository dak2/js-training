const { test, expect } = require('@jest/globals');
const { addCurry, add } = require('../question1_50/q_23');

describe('return total of two number', () => {

  test('when curry function', () => {
    expect(addCurry(1)(2)).toEqual(3);
  })
  
  test('when nomal function', () => {
    expect(add(1, 2)).toEqual(3);
  })
})
