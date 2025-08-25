// Date is also an in-built object

// Dates are stored in ms

// Now refer, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Also read about Temporal (proposal) - https://tc39.es/proposal-temporal/docs/


/*

Some important functions:

    - toString()
    - toDateString()
    - toTimeString()
    - toLocaleString()
    - toLocaleDateString()
    - toLocaleTimeString()
    - toISOString()
    - toJSON()
    - getTime()
    - getDate()
    - getDay()
    - getMonth()
    - Date.now()

*/

let myDate = new Date();
console.log(myDate);        // 2025-07-04T14:05:25.000Z
console.log(typeof myDate); // object

console.log(myDate.toString()); // Fri Jul 04 2025 19:36:24 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Jul 04 2025
console.log(myDate.toTimeString()); // 19:38:22 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());   // 7/4/2025, 7:38:58 PM
console.log(myDate.toLocaleDateString());   // 7/4/2025
console.log(myDate.toLocaleTimeString());   // 7:39:33 PM

console.log(myDate.toISOString()); // 2025-07-04T14:07:53.113Z
console.log(myDate.toJSON());      // 2025-07-04T14:10:24.379Z


let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);         // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1);         // new Date('2023-01-22T23:33:00.000Z')
console.log(myCreatedDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2025-01-12");
console.log(myCreatedDate2.toLocaleString());   // 1/12/2025, 5:30:00 AM

let myCreatedDate3 = new Date("12-01-2025");
console.log(myCreatedDate3.toLocaleString());   // 12/1/2025, 12:00:00 AM


let myTimeStamp = Date.now();

console.log(myTimeStamp);               // 1751638732166 - value in ms
console.log(myCreatedDate.getTime());   // 1674412200000 - value in ms
// used for comparision - quiz app, booking app


// - getDate()
// - getDay()
// - getMonth()

console.log(myDate.toLocaleString('default', {
    weekday: "short"
}));                                                // Fri
