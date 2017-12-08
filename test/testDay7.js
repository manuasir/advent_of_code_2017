/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 7', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_7/index'))
    require('../day_7/input').input.trim().split('\n').length.should.be.equal(1078)
    require('../day_7/index').makeTree(require('../day_7/input').liteInput).should.be.equal('tknk')
    require('../day_7/index').makeTree(require('../day_7/input').input).should.be.equal('aobgmc,rqwgj')
    done()
  })
  it('second challenge', (done) => {

    done()
  })


})
