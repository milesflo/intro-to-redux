/* eslint-env jest */
const { counter, actions: { INC, DEC } } = require('../counter');


test('counter reducer function INC', () => {
  expect(counter(0, {type: INC})).toBe(1)
  expect(counter(1, {type: INC})).toBe(2)
})


test('counter reducer function DEC', () => {
  expect(counter(1, {type: DEC})).toBe(0)
  expect(counter(2, {type: DEC})).toBe(1)
})