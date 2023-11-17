// const add = (param1, param2, param3) => param1 + param2 + param3;

// module.exports = add;

// Build-in modules
 
const fs = require('fs');

const read = fs.readFile('./texts/read.txt', "utf-8", (err, data) => {
    if(err) throw err;
    else {
        // console.log(data);
        fs.writeFile("./texts/write.txt", data, "utf-8", (err, data) => {
            if(err) throw err;
            else {
                console.log(data);
            }
        })
    }
});


