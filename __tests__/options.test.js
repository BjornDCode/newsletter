const lib = require('../src/index.js')

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
})
