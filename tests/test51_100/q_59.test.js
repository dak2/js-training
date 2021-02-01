const { test, expect } = require('@jest/globals');
const appendString = require('../../questions/question51_100/q_59.js');
const nameObj = [{name: 'Scott'},{name: 'James'}]
const results = ['Scottsan','Jamessan']

describe('appendString', () => {
  test('append san to string in object', () => {
    expect(appendString(nameObj)).toEqual(results)
  })
})

