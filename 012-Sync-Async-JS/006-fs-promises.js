/*

    1. Read contents from file hello.txt
    2. Then create a new file named as backup.txt
    3. Copy contents of hello.txt file to backup.txt file
    4. Delete hello.txt file

*/

const fs = require("fs/promises");

console.log("Starting program");

fs
    .readFile('hello.txt', 'utf-8')
    .then((content) => fs.writeFile('backup.txt', content))
    .then(() => fs.unlink('hello.txt'))
    .catch((err) => console.log("Error: ", err));

    console.log("End of program");