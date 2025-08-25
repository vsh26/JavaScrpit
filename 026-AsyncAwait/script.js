/*

Scenario:
    - Prepare URL/ API endpoint (sync)
    - Fetch data (async)
    - Process data (sync)

*/

function getData1(){
    
    // get request

    // fetch -> async
    let response = fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);      // Promise {<pending>}

    // parsing json -> async
    // let data = response.json();
    // console.log(data);      // TypeError
    
}

getData1();

/*

Problem:
- fetch() is asynchronous and hence returns a Promise, not actual response
- so in varibale response we get a Promise, and not actual response

Solution:
- use async-await

*/


async function getData2(){

    // fetch -> async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);  // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}

    // parsing json -> async
    let data = response.json();
    console.log(data);      // Promise {<pending>}
    
}

getData2();

/*

Problem:
- response.json() is also asynchronous and hence also returns a Promise, not the actual data
- so in varibale data we get a Promise, and not the Parsed JSON

Solution:
- use async-await

*/


// Final Solution

async function getData3(){

    // fetch -> async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);  // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}

    // parsing json -> async
    let data = await response.json();
    console.log(data);      // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    
}

getData3();


// Alternate Solution - Promise chaining (without async-await)

function getData4(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

getData4();