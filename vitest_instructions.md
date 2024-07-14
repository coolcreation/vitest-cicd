


npm install -D vitest 
npm install -D jsdom
npm install -D @testing-library/jest-dom @testing-library/react @testing-library/user-event


```js
// make new file:   App.test.jsx
import { assert, describe, expect, it, test } from 'vitest'

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })
})

/*__________________________________*/

describe('suite name', () => {
  it('foo', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})

/*__________________________________*/

function sum(a, b) {
  return a + b
}       

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

