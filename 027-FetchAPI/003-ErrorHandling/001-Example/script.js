fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

/*

Problem:
- .catch() won't run, because fetch did get a response (status 404)


Solution (Error Handling):
- We need to manually check the Response.ok flag (true for 2xx statuses)
*/


// Error Handling

fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Fetch error:", err));

/*

response.ok -> true, is status is 200-299
resonse.status -> actual status code(e.g., 404, 500)
If not okay, we throw -> which goes into .catch()

*/
