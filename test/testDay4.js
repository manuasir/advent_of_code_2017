/* global describe it */

'use strict'

const chai = require('chai')
const should = chai.should()
const assert = require('assert')

describe('Testing day 4', () => {
  it('first challenge', (done) => {
    assert(should)
    assert(require('../day_3/index'))
    require('../day_4/index').isValidPassphrase('aa bb cc dd ee').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aa').should.be.equal(false)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aaa').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('aa bb cc dd aaa').should.be.equal(true)
    require('../day_4/index').isValidPassphrase('fyx fyx nzkm fyx').should.be.equal(false)
    require('../day_4/index').isValidPassphrase('fyx cc nzkm fyxs').should.be.equal(true)
    require('../day_4/index').howManyPassAreValid(require('../day_4/input').input).should.be.equal(451)
    done()
  })
  it('second challenge', (done) => {
    assert(should)
    assert(require('../day_3/index'))
    require('../day_4/index').checkSum('aa bb cc dd ee').should.be.equal(1118)
    require('../day_4/index').isValidCheckSum('abcde fghij').should.be.equal(true)
    require('../day_4/index').isValidCheckSum('abcde xyz ecdab').should.be.equal(false)
    require('../day_4/index').checkSum('abcde xyz ecdab').should.be.equal(1417)
    require('../day_4/index').checkSum('abcde xyz abced').should.be.equal(1417)
    require('../day_4/index').checkSum('edcba xyz abced').should.be.equal(1417)
    require('../day_4/index').isValidCheckSum('a ab abc abd abf abj').should.be.equal(true)
    require('../day_4/index').isValidCheckSum('iiii oiii ooii oooi oooo').should.be.equal(true)
    require('../day_4/index').isValidCheckSum('oiii ioii iioi iiio').should.be.equal(false)
    require('../day_4/index').isValidCheckSum('kxomfck idlh xrbowo nyetbnl qskh xuwkkxe upmmmf zhvuyp').should.be.equal(true)
    require('../day_4/index').isValidCheckSum('kxomfck kcfmoxk idlh xrbowo nyetbnl qskh xuwkkxe upmmmf zhvuyp').should.be.equal(false)
    require('../day_4/index').howManyPassChecksumAreValid(require('../day_4/input').input).should.be.equal(204)
    done()
  })

})
