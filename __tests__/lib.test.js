const lib = require('../src/index.js')
const BaseClass = require('../src/Newsletter.js')
const InvalidOptionsError = require('../src/errors/InvalidOptionsError')
const InvalidProviderError = require('../src/errors/InvalidProviderError')
const InvalidKeyError = require('../src/errors/InvalidKeyError')

const testConfig = {
    provider: 'mailchimp',
    key: 'xxyyxx'
}

describe('create', () => {
    test('it creates an instance of Newsletter', () => {
        const instance = lib.create(testConfig)

        expect(instance).toBeInstanceOf(BaseClass)
        expect(instance.provider).toBe(testConfig.provider)
        expect(instance.key).toBe(testConfig.key)
    })

    test('it requires options', () => {
        expect(lib.create).toThrowError(InvalidOptionsError)
    })

    test('options must be an object', () => {
        expect(() => lib.create('options')).toThrowError(InvalidOptionsError)
    })

    test('it requires a provider option', () => {
        expect(() => lib.create({ key: '' })).toThrowError(InvalidProviderError)
    })

    test('the provider must be a string', () => {
        expect(() => lib.create({ provider: {} })).toThrowError(
            InvalidProviderError
        )
    })

    test('the provider is not supported', () => {
        expect(() =>
            lib.create({ provider: 'non-supported-provider' })
        ).toThrowError(InvalidProviderError)
    })

    test('it requires an api key', () => {
        expect(() => lib.create({ provider: 'mailchimp' })).toThrowError(
            InvalidKeyError
        )
    })

    test('the api key must be a string', () => {
        expect(() => lib.create({ ...testConfig, key: {} })).toThrowError(
            InvalidKeyError
        )
    })

    test('it has a default list name', () => {
        const instance = lib.create(testConfig)

        expect(instance.list).toBe('subscribers')
    })
})
