const config = require('./.babelrc.js');

config.presets[0][1].modules = false;

module.exports = config;
