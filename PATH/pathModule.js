console.log(__dirname);
console.log(__filename);


const path = require('path');

const filePath = "/users/desktop/node/index.js";

// This returns a only file name which present at the end of directory path
console.log(path.basename(filePath));
console.log(path.basename(filePath, '.js'));


// This is for Directory Path
console.log(path.dirname(filePath));


// This return external name of directory (means extension present at the end [.js])
console.log(path.extname(filePath));

// This is for Join the directory it is like concat
const JoinPath = path.join('/users/desktop/git', '/node', '/index.js');
console.log(JoinPath);


//This adds the provided additional in previous path
console.log(path.resolve("folder", 'internal'));


//This gives information about Path
console.log(path.parse(filePath));

