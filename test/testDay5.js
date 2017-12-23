/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 5', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_5/index'))
    require('../day_5/index').instructionSteps(require('../day_5/input').liteInput).should.be.equal(5)
    require('../day_5/index').instructionSteps(require('../day_5/input').input).should.be.equal(339351)
    done()
  })
  it('second challenge', (done) => {
    assert(should)
    assert(require('../day_5/index'))
    require('../day_5/index').instructionStepsV2(require('../day_5/input').liteInput).should.be.equal(10)
    require('../day_5/index').instructionStepsV2(require('../day_5/input').input).should.be.equal(24315397)
    done()
  })
})
