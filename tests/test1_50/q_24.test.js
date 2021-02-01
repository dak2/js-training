const { test, expect } = require('@jest/globals');
const Factory = require('../question1_50/q_24');

const factory = Factory('name')

describe('Factory', () => {
  test('return name', () => {
    expect(factory.introduce()).toEqual('name');
  })
})
