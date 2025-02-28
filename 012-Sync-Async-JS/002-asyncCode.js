// Since we assumed promises don't exist. How do we write asynchronous code?
// Solution: Using callback functions

// load((f_content) => {do_anything_with_file_content})
// Execute the load function. Whenever the work is done, execute callback

const fs = require('fs');

console.log("Starting program");

// readFile('path', 'encoding', callbackFunction)

fs.readFile('./hello.txt', 'utf-8', function(err, content){
    if(err){
        console.log("Error in file reading", err);
    } else {
        console.log("File reading successful. Content of file: ", content);
    }
});

console.log("End of program");