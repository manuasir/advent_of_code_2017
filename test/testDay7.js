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
    // require('../day_7/index').getMax(require('../day_6/input').input.split('\t')).value.should.be.equal(15)
    // require('../day_7/index').memoryDistribution(require('../day_6/input').liteInput)[0].should.be.equal(5)
    // require('../day_7/index').memoryDistribution(require('../day_6/input').input)[0].should.be.equal(12841)
    done()
  })
  it('second challenge', (done) => {

    done()
  })


})
