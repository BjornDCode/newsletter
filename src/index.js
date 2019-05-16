const isEmpty = require('lodash.isempty')
const isString = require('lodash.isstring')
const isObject = require('lodash.isobject')
const Newsletter = require('./Newsletter')
const PROVIDERS = require('./enums').PROVIDERS

const InvalidOptionsError = require('./errors/InvalidOptionsError')
const InvalidProviderError = require('./errors/InvalidProviderError')
const InvalidKeyError = require('./errors/InvalidKeyError')

/**
 * Creates an instance of Newsletter
 * @param  {Object} Options for initialisation
 * @return {Newsletter} An instance of Newsletter
 */
const create = (options = {}) => {
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

    if (!options.key) {
        throw new InvalidKeyError('You must specify an api key in the options')
    }

    if (!isString(options.key)) {
        throw new InvalidKeyError('The api key must be a string')
    }

    return new Newsletter()
}

module.exports = {
    create
}
