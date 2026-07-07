const fs = require('fs');



// This is asynchronous way , sometimes it little bit delay in showing output it depends on file size and content
fs.readFile('info.txt', 'utf8', (err,data)=>{
    if(err){
        console.log("Something went wrong ", err);
    }
    console.log("Content is ", data);
})


// This is synchronous way, usually we avoid this for reading file because of heavy files it is not a good option
const sync = fs.readFileSync('info.txt', 'utf8');
console.log(" Data content is ", sync)


// This is for Write file - in existing file it can add or overwrite content and also can create new file

fs.writeFile('new.txt', "Hello from NodeJs", (err) =>{  // new file create
    if(err){
        console.log("This is error ". err);
    }else{
        console.log("Content written successfully!!")
    }
})

// fs.writeFile('info.txt', "Hello i live in Pune!", (err)=>{  // content overwrite in existing File
//     if(err){
//         console.log("Something went wrong!")
//     }else{
//         console.log("Wrote!")
//     }
// })


// This is for add new Content in exhisting file with previous content

fs.appendFile('info.txt', "\nand age is 25", (err)=>{
    if(err){
        console.log("Error", err)
    }else{
        console.log("Successfully Append")
    }
})


// This is for delete File
// fs.unlink("sm.txt", (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfuly Deleted!!")
//     }
// })


// This is for renaming the file
fs.rename('new.txt', 'CreatedFile.txt', (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("Renaming Successful!!")
    }
})