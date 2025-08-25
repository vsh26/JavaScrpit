/*

    1. Read contents from file hello.txt
    2. Then create a new file named as backup.txt
    3. Copy contents of hello.txt file to backup.txt file
    4. Delete hello.txt file

*/

// Assume 'fs/promises' does not exist. Then how we convert legacy code to modern promisified code

const fs = require('fs');

console.log("Starting program");


function readFileWithPromise(filepath, encoding){

    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {

            if (err){
                reject(err);    // If promise is rejected, reject signals to execute catch() function
            } else {
                resolve(content);   // If promise if fulfilled, resolve signals to execute then() function
            }
        })
    })
}

function writeFileWithPromise(targetFilePath, content){

    return new Promise((resolve, reject) => {
        fs.writeFile(targetFilePath, content, (err) => {
            if(err){
                reject(err);
            } else {
                resolve()
            }
        })
    })
}

function unlinkFileWithPromise(filepath){

    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if(err){
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

// const result =  readFileWithPromise('hello.txt', 'utf-8');
// result has a promise

// result.then(
//  e => {
//    
//    }
// ) -> when promise is fulfilled

readFileWithPromise('hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise('backup.txt', content))
    .then(() => unlinkFileWithPromise('hello.txt'))
    .catch((e) => console.log("Error: ", e))
    .finally(() => console.log("All done!"));

console.log("End of program");