/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')
const expect = chai.expect

describe('Testing day 8', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_8/index'))
    require('../day_8/input').liteInput.trim().split('\n').length.should.be.equal(4)
    require('../day_8/input').input.trim().split('\n').length.should.be.equal(1000)
    expect(require('../day_8/index').processInput(require('../day_8/input').input)).to.be.an('array')
    require('../day_8/index').processInput(require('../day_8/input').input).length.should.be.equal(1000)
    done()
  })
})
