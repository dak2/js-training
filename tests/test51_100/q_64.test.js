const { test, expect } = require('@jest/globals');
const omitedArray = require('../../questions/question51_100/q_64.js');
const array = ['aa','bb','cc','dd','ff'];
const results = ['aa','ff', 'bb','cc','dd'];

describe('appendString', () => {
  test('append san to string in object', () => {
    expect(omitedArray(array)).toEqual(results)
  })
})

