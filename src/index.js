const isEmpty = require('lodash.isempty')
const Newsletter = require('./Newsletter')
const NoOptionsError = require('./errors/NoOptionsError')

module.exports = {
    create: (options = {}) => {
        if (isEmpty(options)) {
            throw new NoOptionsError(
                'You must provide .create with an object of options'
            )
        }

        return new Newsletter()
    }
}
