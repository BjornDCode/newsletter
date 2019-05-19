const validateOptions = require('./helpers').validateOptions

function Newsletter(options = {}) {
    this.provider = options.provider
    this.key = options.key
    this.list = options.hasOwnProperty('list') ? options.list : 'subscribers'
}

/**
 * Update the options on an instance
 * @param  {Object} options New options for the instance
 * @return {undefined}
 */
Newsletter.prototype.update = function(options = {}) {
    validateOptions(options, false)

    this.provider = options.hasOwnProperty('provider')
        ? options.provider
        : this.provider
    this.key = options.hasOwnProperty('key') ? options.key : this.key
    this.list = options.hasOwnProperty('list') ? options.list : this.list
}

module.exports = Newsletter
