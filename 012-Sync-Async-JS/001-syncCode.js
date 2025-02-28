// Sync Code -> Blocking code
// Async Code -> Non-blocking code

// Async JS is being used for a long time. Promises were introduced later.
// Assume promises don't exist now.

// Importing fs module
const fs = require('fs');

console.log("Starting program");

// readFileSync('path', 'encoding')

const content = fs.readFileSync('./hello.txt', 'utf-8');
console.log("File reading successful. Content of file: ", content);

console.log("End of program");

// This is a blocking code
// Assume, that reading file is a time intensive task and takes 10s for each request
// If we have multiple users, time taken to serve the request will increase as users increase
