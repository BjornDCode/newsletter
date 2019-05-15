const lib = require('../src/index.js')
const BaseClass = require('../src/Newsletter.js')
const NoOptionsError = require('../src/errors/NoOptionsError')

const testConfig = {
    provider: 'mailchimp'
}

describe('init', () => {
    test('it creates an instance of Newsletter', () => {
        const instance = lib.create(testConfig)

        expect(instance).toBeInstanceOf(BaseClass)
    })

    test('it requires options', () => {
        expect(lib.create).toThrowError(NoOptionsError)
    })
})
