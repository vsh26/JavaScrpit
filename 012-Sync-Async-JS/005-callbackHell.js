/*

    1. Read contents from file hello.txt
    2. Then create a new file named as backup.txt
    3. Copy contents of hello.txt file to backup.txt file
    4. Delete hello.txt file

*/

const fs = require('fs');

console.log("Starting program");

fs.readFile('hello.txt', 'utf-8', function(err, content){
    if(err){
        console.log("Error in reading file", err);
    } else {
        console.log("File reading sucessful. Content of file: ", content);
        fs.writeFile('backup.txt', content, function(err){
            if(err){
                console.log("Error in writing backup.txt", err);
            } else {
                console.log("backup.txt created successfully");
                fs.unlink('hello.txt', function(err){
                    if(err){
                        console.log("Error in deleting file", err);
                    } else {
                        console.log("File deleted successfully");
                    }
                })
            }
        })
    }
})

console.log("End of program");