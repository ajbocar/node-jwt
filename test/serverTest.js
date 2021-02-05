const assert = require('chai').assert
const app = require('../server')

describe('App', () => {
    it('app should return hello', () => {
        assert.equal(app(), 'hello')
    })
})