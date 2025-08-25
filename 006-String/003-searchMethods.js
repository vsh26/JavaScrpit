/*

    - indexOf()
    - lastIndexOf()
    - search()
    - match()
    - matchAll()
    - includes()
    - startsWith()
    - endsWith()

*/

const bigStr = "Iron Man siad that, I am Iron Man, because his suit is made up of Iron";


// ---------- indexOf() ----------
// index of first occurrence of beginning of the string
const firstIndex = bigStr.indexOf("Iron");
console.log(firstIndex);

const firstIndexAfter = bigStr.indexOf("Iron", 10);
console.log(firstIndexAfter);


// ---------- lastIndexOf() ----------
// index of last occurrence of beginning of the string
const lastIndex = bigStr.lastIndexOf("Iron");
console.log(lastIndex);


// ---------- search() -----------
// searches a string for a string (or a regular expression) and returns the position of the match.
// It cannot take second argument (where to begin search)
const searchIndex = bigStr.search("Iron");
console.log(searchIndex);


const text = "The rain in SPAIN stays mainly in the plain";


// ---------- match() ----------
// returns an array containing the results of matching a string against a string (or a regular expression)
console.log(text.match("ain"));     // Perform a search for "ain" (first occurrence)
console.log(text.match(/ain/));     // Perform a search for "ain" (first occurrence)
console.log(text.match(/ain/g));    // Perform a global search for "ain" (returns all occurrences)
console.log(text.match(/ain/gi));   // Perform a global search for "ain" (returns all occurrences, case-insensitive)


// ---------- matchAll() ----------
// returns an iterator containing the results of matching a string against a string (or a regular expression)
console.log(text.matchAll("ain"));


// ---------- includes() ----------
console.log(bigStr.includes("Hulk"));       // false
console.log(bigStr.includes("Iron Man"));   // true


// ---------- startsWith() ----------
console.log(bigStr.startsWith("Iron"));     // true
console.log(bigStr.startsWith("Man", 5));   // true
console.log(bigStr.startsWith("Gold"));     // false


// ---------- endsWith() ----------
console.log(bigStr.endsWith("on"));         // true
