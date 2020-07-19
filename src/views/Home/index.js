const pug = require('pug');
const path = require("path");
const compiledFunction = pug.compileFile(path.resolve(__dirname, '..', 'layouts', 'displayUsers.pug'));

module.exports = compiledFunction;
