const { test, expect } = require('@jest/globals');
const Who = require('../question1_50/q_17');

const name = 'daichi';
const who = new Who(name)

test('return greet hello', () => {
  expect(who.getName()).toStrictEqual('daichi');
})
