const { test, expect } = require('@jest/globals');
const mergeObject = require('../question1_50/q_1');

const a = { a: 'a' }
const b = { b: 'b' }
const objectC = { a: 'a', b: 'b' } 

test('merge a and b object', () => {
  expect(mergeObject(a,b)).toStrictEqual(objectC);
})
