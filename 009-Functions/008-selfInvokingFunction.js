/*

SELF-INVOKING FUNCTION

    OR

IIFE - Immidiately Invoked Function Expression

    A function that calls itself immidiately after it's defined

*/

(function(){
    console.log("This is a self invoking function");
})();


let config = (function () {
    let settings = {
      theme: "dark",
    };
    return settings;
})();
console.log(config);