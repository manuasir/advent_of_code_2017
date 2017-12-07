/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 6', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_6/index'))
    require('../day_6/input').input.split('\t').length.should.be.equal(16)
    require('../day_6/index').getMax(require('../day_6/input').input.split('\t')).value.should.be.equal(15)
    require('../day_6/index').memoryDistribution(require('../day_6/input').liteInput)[0].should.be.equal(5)
    require('../day_6/index').memoryDistribution(require('../day_6/input').input)[0].should.be.equal(12841)
    done()
  })
  it('first challenge', (done) => {

    require('../day_6/index').memoryDistribution(require('../day_6/input').liteInput)[1].should.be.equal(4)
    require('../day_6/index').memoryDistribution(require('../day_6/input').input)[1].should.be.equal(8038)
    done()
  })


})
