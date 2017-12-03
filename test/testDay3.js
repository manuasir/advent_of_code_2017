/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 3', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_3/index'))
    require('../day_3/index').howManySteps(12).should.be.equal(3)
    require('../day_3/index').howManySteps(23).should.be.equal(2)
    require('../day_3/index').howManySteps(1024).should.be.equal(31)
    require('../day_3/index').howManySteps(277678).should.be.equal(475)
    done()
  })

})
