const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js');

module.exports = function(options) {
    console.info('Processing DEV webpack config....');
    return webpackMerge(commonConfig(options), {});
};
