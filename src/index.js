const isEmpty = require('lodash.isempty')
const isString = require('lodash.isstring')
const Newsletter = require('./Newsletter')
const PROVIDERS = require('./enums').PROVIDERS

const NoOptionsError = require('./errors/NoOptionsError')
const InvalidProviderError = require('./errors/InvalidProviderError')

module.exports = {
    create: (options = {}) => {
        if (isEmpty(options)) {
            throw new NoOptionsError(
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
