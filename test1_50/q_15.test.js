const { test, expect } = require('@jest/globals');
const { splitArray, toArray } = require('../question1_50/q_15');

const array = ['a1','a2','a3','a4','a5']
const slashedString = 'a1/a2/a3/a4/a5';

test('return join array with slash', () => {
  expect(splitArray(array)).toStrictEqual(slashedString);
})

test('return array splited by slash', () => {
  expect(toArray(slashedString)).toStrictEqual(array);
})
