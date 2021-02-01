const { test, expect } = require('@jest/globals');
const withIndex = require('../question1_50/q_4');

const array = ['a', 'b']
const arrayWithIndex = ['a0', 'b1'];

test('return specifiedArray', () => {
  expect(withIndex(array)).toStrictEqual(arrayWithIndex);
})
