const isEmpty = require('lodash.isempty')
const isString = require('lodash.isstring')
const isObject = require('lodash.isobject')
const Newsletter = require('./Newsletter')
const PROVIDERS = require('./enums').PROVIDERS

const InvalidOptionsError = require('./errors/InvalidOptionsError')
const InvalidProviderError = require('./errors/InvalidProviderError')

module.exports = {
    create: (options = {}) => {
        if (!isObject(options)) {
            throw new InvalidOptionsError('Options must be an object')
        }

        if (isEmpty(options)) {
            throw new InvalidOptionsError(
                'You must provide .create with an object of options'
            )
        }

        if (!options.provider) {
            throw new InvalidProviderError(
                'You must specify a provider in the options'
            )
        }

        if (!isString(options.provider)) {
            throw new InvalidProviderError('The provider must be a string')
        }

        if (PROVIDERS.indexOf(options.provider) === -1) {
            throw new InvalidProviderError('The provider is not supported')
        }

        return new Newsletter()
    }
}
