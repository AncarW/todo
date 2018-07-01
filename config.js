// Version is aquired from package.json
module.exports.version = require('./package.json').version
// Displays the current year in the DOM footer. 
module.exports.year = new Date().getFullYear()   
