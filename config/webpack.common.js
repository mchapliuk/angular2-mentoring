const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '/../src'),
    dist: path.join(__dirname, '/../dist')
};

// Metadata for generating index.html
const METADATA = {
    title: 'Angular2 Global Mentoring: Maksym Chapliuk'
};

module.exports = function(options) {
    console.info('Processing COMMON webpack config....');
    return {
        entry: {
            app: PATHS.src
        },
        output: {
            path: PATHS.dist,
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: METADATA.title,
                chunksSortMode: 'dependency',
                metadata: Object.assign(METADATA, {
                    isDevBuild: options.env === 'development',
                    isProdBuild: options.env === 'production'
                }),
                inject: 'head'
            })
        ]

    }
};
