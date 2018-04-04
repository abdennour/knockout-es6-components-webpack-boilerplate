const config = require('./config');

config.target = 'node';
config.mode = 'development';
config.module.rules[1].use = ['css-loader']
module.exports = config;
