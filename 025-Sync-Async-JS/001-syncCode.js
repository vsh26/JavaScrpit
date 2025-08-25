// Sync Code -> Blocking code
// Async Code -> Non-blocking code

// Async JS is being used for a long time. Promises were introduced later.
// Assume promises don't exist now.

// Importing fs module
const fs = require('fs');

console.log("Starting program");

// readFileSync('path', 'encoding')

// readFileSync is synchronous -> it means that event loop is blocked until the file is completely read.

const content = fs.readFileSync('./hello.txt', 'utf-8');
console.log("File reading successful. Content of file: ", content);

console.log("End of program");

// This is a blocking code


// Assume, that reading file is a time intensive task and takes 10s for each request
// - No other code can run during that time.
// - If many users make requests, each must wait for the previous one
// - This scales badly
