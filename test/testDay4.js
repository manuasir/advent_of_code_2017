/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 4', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_4/index'))
    require('../day_4/index').isValidPassphrase('aa bb cc dd ee').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aa').should.be.equal(false)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aaa').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aaa').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('fyx fyx nzkm fyx').should.be.equal(false)
    require('../day_4/index').isValidPassphrase('fyx cc nzkm fyxs').should.be.equal(true)
    require('../day_4/index').howManyPassAreValid(require('../day_4/input').input).should.be.equal(452)
    done()
  })
  it('second challenge', (done) => {
    assert(should)
    assert(require('../day_4/index'))
    require('../day_4/index').howManyPassChecksumAreValid(require('../day_4/input').input).should.be.equal(223)
    done()
  })

})
