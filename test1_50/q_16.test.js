const { test, expect } = require('@jest/globals');
const randomGreet = require('../question1_50/q_16');
const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

const greetWords = ['おはよう','こんにちは','おやすみなさい'];
const hello = 'おはよう';

test('return greet hello', () => {
  expect(randomGreet(greetWords)).toStrictEqual(hello);
})
