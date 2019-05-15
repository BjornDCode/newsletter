const Newsletter = require('./Newsletter')

module.exports = {
    create: () => {
        return new Newsletter()
    }
}
