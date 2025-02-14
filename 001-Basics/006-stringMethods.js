let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text1 = "Hello";
let text2 = "World!";
let text3 = "Welcome";
let text4 = "to";
let text5 = "JavaScript";

// length - length/size of string
let length = text.length;
console.log(length);

/*
 Extracting characters
 - at()
 - charAt()
 - []
*/
console.log(text.at(21));
console.log(text.at(27));       // undefined
console.log(text.charAt(21));
console.log(text.charAt(27));   // ''
console.log(text[21]);
console.log(text[27]);          // undefined

// UTF-16 code of character - charCodeAt()
console.log(text.charCodeAt(0));

/*
Extracting string parts
  - slice(start(I), end(NI))
  - substring(start(I), end(NI))
  - substr(start, length)
*/

// slice()

const textPart1 = text.slice(0, 10);
// element at index 0 -> included, 10 -> not included
const textPart2 = text.slice(-1, 10);
const textPart3 = text.slice(10);
const textPart4 = text.slice(-16);
const textPart5 = text.slice(-26, -16);
console.log(textPart1);     // 'ABCDEFGHIJ'
console.log(textPart2);     // ''
console.log(textPart3);     // 'KLMNOPQRSTUVWXYZ'
console.log(textPart4);     // 'KLMNOPQRSTUVWXYZ'
console.log(textPart5);     // 'ABCDEFGHIJ'


// substring()

const textPart6 = text.substring(0, 10);
// element at index 0 -> included, 10 -> not included
const textPart7 = text.substring(-100, 10);
const textPart8 = text.substring(10);
console.log(textPart6);     // 'ABCDEFGHIJ'
console.log(textPart7);     // 'ABCDEFGHIJ'
console.log(textPart8);     // 'KLMNOPQRSTUVWXYZ'


// substr()

const textPart9 = text.substr(10, 13);
// element at index 10 -> included, 13 -> length of substring
const textPart10 = text.slice(10, 100);
const textPart11 = text.slice(20);
const textPart12 = text.slice(-10);
console.log(textPart9);     // 'KLMNOPQRSTUVW'
console.log(textPart10);    // 'KLMNOPQRSTUVWXYZ'
console.log(textPart11);    // 'UVWXYZ'
console.log(textPart12);    // 'QRSTUVWXYZ'


// toLowerCase()
const lowerCaseStr = text.toLowerCase();
console.log(lowerCaseStr);

// toUpperCase()
const upperCaseStr = text.toUpperCase();
console.log(upperCaseStr);


// concatenating
console.log(text1 + text2);
console.log(text1.concat(" ", text2, " ", text3, " ", text4, " ", text5));


const str1 = "   Hello World!        ";
console.log(str1.length);         // 23

/*
  Removing whitespaces
    - trim()
    - trimStart()
    - trimEnd()
*/

// trim() - remove whitespaces from beginning and end of string
const trimmedStr1 = str1.trim();
console.log(trimmedStr1.length);  // 12

// trimStart() - remove whitespaces from the beginning of the string
const beginningTrimmedStr1 = str1.trimStart();
console.log(beginningTrimmedStr1.length); // 20

// trimEnd() - remove whitespaces from the end of the string
const endTrimmedStr1 = str1.trimEnd();
console.log(endTrimmedStr1.length);   // 15


/*
  Pad string into a string, until string length is reached
    - padStart(length, str_to_be_padded)
    - padEnd(length, str_to_be_padded)
*/

// padStart(length, str_to_be_padded)

const leftPaddedText1 = text.padStart(30, "!@#");
console.log(leftPaddedText1);   // '!@#!ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const leftPaddedText2 = text.padStart(12, "!@#");
console.log(leftPaddedText2);   // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


// padEnd(length, str_to_be_padded)

const rightPaddedText1 = text.padEnd(35, "!@#$%");
console.log(rightPaddedText1);  // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%!@#$'

const rightPaddedText2 = text.padEnd(20, "!@#$%");
console.log(rightPaddedText2);  // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const helloStr = "Hello!";

// repeat() - returns a new string with a number of copies of original string
const repeatedHelloStr = helloStr.repeat(3);
console.log(repeatedHelloStr);   // 'Hello!Hello!Hello!'

const bigStr = "Iron Man siad that, I am Iron Man, because his suit is made up of Iron";

// replace(str_to_be_replaced, new_str) - replaces just first occurance
const newBigStr1 = bigStr.replace("Iron Man", "Spiderman");
console.log(newBigStr1);

// replcaeAll(str_to_be_replaced, new_str) - replaces all occurances
const newBigStr2 = bigStr.replaceAll("Iron Man", "Spiderman");
console.log(newBigStr2);

/*
  split()
    - split(",") -> split on comma
    - split(" ") -> split on spaces
    - split("|") -> split on pipe
*/