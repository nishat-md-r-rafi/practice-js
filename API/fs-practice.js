const fs = require('node:fs');

const resultAsync = fs.readFile("file.txt","utf-8", (err,data)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
})

const result = fs.readFileSync("file.txt")
console.log(result, new Date().getHours())