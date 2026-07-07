const os = require('os');
console.log("Current OS is ", os.platform());
console.log("Free Memory ", os.freemem());

const add = require('./math').add;
console.log('Addition is ', add(5,10));

const chalk = require('chalk');
console.log(chalk.blueBright("Chalk installed"));