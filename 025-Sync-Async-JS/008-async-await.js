/*

async and await in JavaScript is used
to simplify handling asynchronous operations using promises.

By enabling asynchronous code to appear synchronous,
they enhance code readability and
make it easier to manage complex asynchronous flows.

(Syntax Sugar)

*/

/*

    1. Read contents from file hello.txt
    2. Then create a new file named as backup.txt
    3. Copy contents of hello.txt file to backup.txt file
    4. Delete hello.txt file

*/

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


// Multiple async code is running in sync fashion 

// readFileWithPromise('hello.txt', 'utf-8')
//     .then((content) => writeFileWithPromise('backup.txt', content))
//     .then(() => unlinkFileWithPromise('hello.txt'))
//     .catch((e) => console.log("Error: ", e))
//     .finally(() => console.log("All done!"));

//     console.log("End of program");


// const result =  readFileWithPromise('hello.txt', 'utf-8');
// result has a promise


// const fileContent =  await readFileWithPromise('hello.txt', 'utf-8');
// await resolves the promise and returns result of function to fileContent


// Whenever we want to use await, we have to write it into an async function

async function doTasks(){

    try{
        const fileContent = await readFileWithPromise('hello.txt', 'utf-8');
        await writeFileWithPromise('backup.txt', fileContent);
        await unlinkFileWithPromise('hello.txt');
    } catch(e) {
        console.log("Error: ", e);
    } finally {
        console.log("All done by function");
    }
    
}

// doTasks() -> returns promise

doTasks().then(() => console.log("All done!"));

console.log("End of program");