const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: "Iron Man"}),
    headers: myHeaders,
};

// Using async-await
async function postData(){
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("My data: ", data);     // My data:  {username: 'Iron Man', id: 101}
}

postData();

// Using Promise chaining
function postData1(){
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => console.log("My data: ", data))
        .catch((err) => console.log(err));
}

postData1();