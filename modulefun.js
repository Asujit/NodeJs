// const os = require('os');
// console.log("Current OS is ", os.platform());
// console.log("Free Memory ", os.freemem());

// const add = require('./math').add;
// console.log('Addition is ', add(5,10));

// const chalk = require('chalk');
// console.log(chalk.blueBright("Chalk installed"));


// Real Exercise
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname,'dum', 'dummy.txt');
fs.writeFileSync(filePath, "Hello, This is NodeJs Exercise");
// const data = fs.readFileSync(filePath, 'utf-8');
// console.log(data);