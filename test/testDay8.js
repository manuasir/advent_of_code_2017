/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 8', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_8/index'))
    require('../day_8/input').liteInput.trim().split('\n').length.should.be.equal(4)
    require('../day_8/input').input.trim().split('\n').length.should.be.equal(1000)
    require('../day_8/index').process(require('../day_8/input').liteInput).should.be.equal(1)
    require('../day_8/index').process(require('../day_8/input').input).should.be.equal(7787)
    done()
  })
  it('second challenge', (done) => {
    require('../day_8/index').process(require('../day_8/input').liteInput).should.be.equal(1)
    require('../day_8/index').maxHeld().should.be.equal(10)
    require('../day_8/index').process(require('../day_8/input').input).should.be.equal(7787)
    require('../day_8/index').maxHeld().should.be.equal(8997)
    done()
  })
})
