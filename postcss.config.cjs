const postcssNesting = require('postcss-nesting')

module.exports = {
    map: false,
    plugins: {
        'postcss-nesting': postcssNesting,
    },
}
