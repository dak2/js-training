const { test, expect } = require('@jest/globals');
const orderByDesc = require('../question1_50/q_21');

const numbers = [20,100,3,35,0];
const orderedByDesc = [100,35,20,3,0]

test('return numbers ordered by desc', () => {
  expect(orderByDesc(numbers)).toEqual(orderedByDesc);
})