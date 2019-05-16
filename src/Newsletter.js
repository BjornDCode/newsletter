function Newsletter(options = {}) {
    this.provider = options.provider
    this.key = options.key
    this.list = 'subscribers'
}

module.exports = Newsletter
