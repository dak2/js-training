const { test, expect } = require('@jest/globals');
const alphabetize = require('../question1_50/q_20');

const alphabet = ['B', 'a', 'c', 'e', 'k'];
const alphabetized = ['a', 'B', 'c', 'e', 'k'];

test('return alphabetized array', () => {
  expect(alphabetize(alphabet)).toStrictEqual(alphabetized);
})