const isEmpty = require('lodash.isempty')
const Newsletter = require('./Newsletter')

const NoOptionsError = require('./errors/NoOptionsError')
const NoProviderError = require('./errors/NoProviderError')

module.exports = {
    create: (options = {}) => {
        if (isEmpty(options)) {
            throw new NoOptionsError(
                'You must provide .create with an object of options'
            )
        }

        if (!options.provider) {
            throw new NoProviderError(
                'You must specify a provider in the options'
            )
        }

        return new Newsletter()
    }
}
