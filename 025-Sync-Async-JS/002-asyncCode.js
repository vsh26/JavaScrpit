// Since we assumed promises don't exist. How do we write asynchronous code?
// Solution: Using callback functions

// load((f_content) => {do_anything_with_file_content})
// Execute the load function. Whenever the work is done, execute callback

const fs = require('fs');

console.log("Starting program");

// readFile('path', 'encoding', callbackFunction)

// fs.readFile is non-blocking
//The program tells Node: “Go read this file in the background. When you’re done, call this callback function.”

fs.readFile('./hello.txt', 'utf-8', function(err, content){
    if(err){
        console.log("Error in file reading", err);
    } else {
        console.log("File reading successful. Content of file: ", content);
    }
});

console.log("End of program");

// Meanwhile, execution continues immediately → "End of program" prints before file reading is complete

// When the file is ready, Node’s I/O background thread pushes the callback into the Task Queue, and the Event Loop executes it