const lib = require('../src/index.js')
const BaseClass = require('../src/Newsletter.js')
const NoOptionsError = require('../src/errors/NoOptionsError')
const InvalidProviderError = require('../src/errors/InvalidProviderError')

const testConfig = {
    provider: 'mailchimp'
}

describe('create', () => {
    test('it creates an instance of Newsletter', () => {
        const instance = lib.create(testConfig)

        expect(instance).toBeInstanceOf(BaseClass)
    })

    test('it requires options', () => {
        expect(lib.create).toThrowError(NoOptionsError)
    })

    test('it requires a provider option', () => {
        expect(() => lib.create({ invalid: '' })).toThrowError(
            InvalidProviderError
        )
    })

    test('the provider must be a string', () => {
        expect(() => lib.create({ provider: {} })).toThrowError(
            InvalidProviderError
        )
    })
})
