const { test, expect } = require('@jest/globals');
const specificArray = require('../question1_50/q_2');

const array = ['aa','bb','cc','dd','ee','ff','gg'];
const specifiedArray = ['dd', 'ee', 'ff']

test('return specifiedArray', () => {
  expect(specificArray(array)).toStrictEqual(specifiedArray);
})
