# Fetch API

The Fetch API is the modern way to make `HTTP` requests in JavaScript (in browsers, and also in Node with some support). It replaces older approaches like `XMLHttpRequest` with a cleaner, promise-based syntax.

## Key points about Fetch API

- Built on Promises → asynchronous and non-blocking
- Returns a Promise that resolves to a `Response` object
- Available in most browsers (and in modern Node.js)
- Cleaner and more powerful than `XMLHttpRequest`

## Common HTTP Methods with Fetch

| HTTP Method  | Use Case                          | CRUD Operation  |
|--------------|-----------------------------------|-----------------|
| GET          | Retrieve data                     | Read            |
| POST         | Send data / create new resource   | Create          |
| PUT          | Update or replace a resource      | Update (Replace)|
| PATCH        | Partially update a resource       | Update (Modify) |
| DELETE       | Remove a resource                 | Delete          |

## Error handling

- `fetch()` only rejects its promise on **network errors**
    - request doesn’t even reach the server or
    - the response never comes back 
    - E.g.: no internet, DNS failure, CORS
- It does NOT reject if the server responds with a bad status
    - request reaches the server, but the server responds with an error status
    - E.g.: `404 Not Found`, `500 Internal Server Error`
    - In this case, `fetch()` resolves normally (no rejection), but the `response.ok` flag will be false