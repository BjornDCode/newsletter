function Newsletter(options = {}) {
    this.provider = options.provider
    this.key = options.key
    this.list = options.hasOwnProperty('list') ? options.list : 'subscribers'
}

module.exports = Newsletter
