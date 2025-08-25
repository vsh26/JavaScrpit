# Server Errors

Server errors occur when the request successfully reaches the server, but the server fails to process it correctly.

- Unlike network errors, these still return a response — just with an error status code.
- That’s why fetch() does not reject on server errors.
- Instead, the Response object is returned, but with `response.ok === false`.

## Common Causes of Server Errors

- **Server misconfiguration** – e.g., broken backend code
- **Database issues** – server cannot read/write data
- **Overloaded server** – too many requests at once
- **Bad gateway / proxy** issues – upstream server failed
- **Unhandled exceptions** – code crash on the server

## Examples of Server Error Codes

- `500 Internal Server Error` – generic server failure
- `502 Bad Gateway` – invalid response from upstream server
- `503 Service Unavailable` – server is down or overloaded
- `504 Gateway Timeout` – server didn’t get response in time