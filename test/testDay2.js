/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 2', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_2/index'))
    require('../day_2/index').checkSum(require('../day_2/input').inputTest).should.be.equal(18)
    require('../day_2/index').checkSum(require('../day_2/input').input).should.be.equal(39126)
    done()
  })
  it('second challenge', (done) => {
    require('../day_2/index').getEvenlyDivisibleValues(require('../day_2/input').input).should.be.equal(258)
    done()
  })
})
