const Newsletter = require('./Newsletter')
const validateOptions = require('./helpers').validateOptions

/**
 * Creates an instance of Newsletter
 * @param  {Object} Options for initialisation
 * @return {Newsletter} An instance of Newsletter
 */
const create = (options = {}) => {
    validateOptions(options)

    return new Newsletter(options)
}

module.exports = {
    create
}
