/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 1', () => {
  it('first challenge', (done) => {
    assert(should)
    assert( require('../day_1/index'))
    require('../day_1/index').resolveCaptcha('1122').should.be.equal(3)
    require('../day_1/index').resolveCaptcha('1111').should.be.equal(4)
    require('../day_1/index').resolveCaptcha('1234').should.be.equal(0)
    require('../day_1/index').resolveCaptcha('91212129').should.be.equal(9)
    require('../day_1/index').resolveCaptcha(require('../day_1/input').firstInput).should.be.equal(1216)
    done()
  })
  it('second challenge', (done) => {
    require('../day_1/index').resolveCaptchaHalfwayAround('1212').should.be.equal(6)
    require('../day_1/index').resolveCaptchaHalfwayAround('1221').should.be.equal(0)
    require('../day_1/index').resolveCaptchaHalfwayAround('123425').should.be.equal(4)
    require('../day_1/index').resolveCaptchaHalfwayAround('123123').should.be.equal(12)
    require('../day_1/index').resolveCaptchaHalfwayAround('12131415').should.be.equal(4)
    require('../day_1/index').resolveCaptchaHalfwayAround(require('../day_1/input').secondInput).should.be.equal(1072)
    done()
  })
})