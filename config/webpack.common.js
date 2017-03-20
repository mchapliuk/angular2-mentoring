const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    root: path.resolve(__dirname, '../'),
    src: path.join(__dirname, '/../src'),
    dist: path.join(__dirname, '/../dist')
};

module.exports = function (options) {
    console.info('Processing COMMON webpack config....');
    return {
        entry: {
            polyfills: path.resolve(PATHS.root, 'polyfills.ts'),
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
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }, {
                    test: /\.css$/,
                    use: ['css-loader']
                }, {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [
                        path.resolve(__dirname, '../src/index.html')
                    ]
                }, {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                metadata: {
                    isDevBuild: options.env === 'development',
                    isProdBuild: options.env === 'production'
                },
                inject: 'head'
            })
        ]

    }
};
