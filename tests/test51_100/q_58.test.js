const { test, expect } = require('@jest/globals');
const appendString = require('../../questions/question51_100/q_58.js');
const names = [['John', 'Michel', 'Mike'],['Scott', 'Brawn', 'James']]
const results = ['Johnsan', 'Michelsan', 'Mikesan', 'Scottsan', 'Brawnsan', 'Jamessan']

describe('appendString', () => {
  test('append san to string in array', () => {
    expect(appendString(names)).toEqual(results)
  })
})

