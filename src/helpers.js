const isEmpty = require('lodash.isempty')
const isString = require('lodash.isstring')
const isObject = require('lodash.isobject')

const PROVIDERS = require('./enums').PROVIDERS

const InvalidOptionsError = require('./errors/InvalidOptionsError')
const InvalidProviderError = require('./errors/InvalidProviderError')
const InvalidKeyError = require('./errors/InvalidKeyError')
const InvalidListError = require('./errors/InvalidListError')

/**
 * Validate options
 * @param  {Object} options         Options for an instance
 * @throws {InvalidOptionsError}    Options are not an object or is empty
 * @throws {InvalidProviderError}   Provider is not given, is not a string or is not supported
 * @throws {InvalidKeyError}        Key is not given or is not a string
 * @throws {InvalidListError}       List is not a string
 * @return {boolean}                Whether the options are valid
 */
const validateOptions = (options = {}, fieldsRequired = true) => {
    if (!isObject(options)) {
        throw new InvalidOptionsError('Options must be an object')
    }

    if (isEmpty(options)) {
        throw new InvalidOptionsError(
            'You must provide .create with an object of options'
        )
    }

    if (fieldsRequired && !options.provider) {
        throw new InvalidProviderError(
            'You must specify a provider in the options'
        )
    }

    if (options.hasOwnProperty('provider') && !isString(options.provider)) {
        throw new InvalidProviderError('The provider must be a string')
    }

    if (
        options.hasOwnProperty('provider') &&
        PROVIDERS.indexOf(options.provider) === -1
    ) {
        throw new InvalidProviderError('The provider is not supported')
    }

    if (fieldsRequired && !options.key) {
        throw new InvalidKeyError('You must specify an api key in the options')
    }

    if (options.hasOwnProperty('key') && !isString(options.key)) {
        throw new InvalidKeyError('The api key must be a string')
    }

    if (options.hasOwnProperty('list') && !isString(options.list)) {
        throw new InvalidListError('The list name must be a string')
    }

    return true
}

module.exports = {
    validateOptions
}
