'use strict'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: [
        './src/main.js'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.less$/,
                loader: 'less-loader' // compiles Less to CSS
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}