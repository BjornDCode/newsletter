const lib = require('../src/index.js')
const InvalidOptionsError = require('../src/errors/InvalidOptionsError')
const InvalidProviderError = require('../src/errors/InvalidProviderError')
const InvalidKeyError = require('../src/errors/InvalidKeyError')
const InvalidListError = require('../src/errors/InvalidListError')

const testConfig = require('./fixtures/config')
const newConfig = {
    key: 'key'
}

describe('options', () => {
    test('it can update options on an instance', () => {
        const instance = lib.create(testConfig)

        instance.update(newConfig)

        expect(instance.provider).toBe(testConfig.provider)
        expect(instance.key).toBe(newConfig.key)
    })

    test('it requires options', () => {
        const instance = lib.create(testConfig)

        expect(instance.update).toThrowError(InvalidOptionsError)
    })

    test('options must be an object', () => {
        expect(() => lib.create('options')).toThrowError(InvalidOptionsError)
    })

    test('the provider must be a string', () => {
        expect(() => lib.create({ provider: {} })).toThrowError(
            InvalidProviderError
        )
    })

    test('the provider must be supported', () => {
        expect(() =>
            lib.create({ provider: 'non-supported-provider' })
        ).toThrowError(InvalidProviderError)
    })

    test('the api key must be a string', () => {
        expect(() => lib.create({ ...testConfig, key: {} })).toThrowError(
            InvalidKeyError
        )
    })

    test('the list name must be a string', () => {
        expect(() => lib.create({ ...testConfig, list: {} })).toThrowError(
            InvalidListError
        )
    })
})
