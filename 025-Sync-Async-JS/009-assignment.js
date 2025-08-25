/*

    1. Read contents from file hello.txt
    2. Then create a new file named as backup.txt
    3. Copy contents of hello.txt file to backup.txt file
    4. Wait for 10 secs
    5. Delete hello.txt file

*/

const fs = require('fs');

console.log("Starting program");

function readFileWithPromise(filepath, encoding){

    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if(err){
                reject(err);
            } else {
                resolve(content);
            }
        });
    });
}

function writeFileWithPromise(targetFilePath, content){

    return new Promise((resolve, reject) => {
        fs.writeFile(targetFilePath, content, (err) => {
            if(err){
                reject(err);
            } else {
                resolve()
            }
        });
    });
}

function unlinkFileWithPromise(filepath){

    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if(err){
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function wait(seconds){

    return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), seconds * 1000);
    });
}

async function doTasks(){

    try{
        const fileContent = await readFileWithPromise('hello.txt', 'utf-8');
        await writeFileWithPromise('backup.txt', fileContent);
        await wait(10);
        await unlinkFileWithPromise('hello.txt');
    } catch (e) {
        console.log("Error: ", e);
    } finally {
        console.log("All done by function");
    }

}

doTasks().then(() => console.log("All done!"));

console.log("End of program");
