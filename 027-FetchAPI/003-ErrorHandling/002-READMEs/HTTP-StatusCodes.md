# HTTP Status Codes

- HTTP status codes are 3-digit responses returned by a server when a client (browser, API, etc.) makes a request.
- They are grouped into categories based on the first digit.
- Status Codes:
    - **1xx** → Informational
    - **2xx** → Success
    - **3xx** → Redirection
    - **4xx** → Client error
    - **5xx** → Server error

---

## Status Codes

### 1xx – Informational

The request was received, and the process is continuing

- `100 Continue` – Initial request received, client should continue
- `101 Switching Protocols` – Server agrees to switch protocols (e.g., WebSocket)

---

### 2xx – Success

The request was successfully received, understood, and accepted

- `200 OK` – Standard success for GET, PUT, DELETE
- `201 Created` – A resource was successfully created (common for POST)
- `202 Accepted` – Request accepted, but processing not complete
- `204 No Content` – Success, but no body returned (useful for DELETE)

---

### 3xx – Redirection

The client must take further action to complete the request

- `301 Moved Permanently` – Resource moved, use new URL
- `302 Found` – Temporary redirect
- `304 Not Modified` – Cached response is still valid, no need to re-download

---

### 4xx – Client Errors

The request has an issue from the client side

- `400 Bad Request` – Invalid request (e.g., malformed JSON)
- `401 Unauthorized` – Authentication required or failed
- `403 Forbidden` – Client authenticated but not allowed to access resource
- `404 Not Found` – Resource does not exist
- `405 Method Not Allowed` – Wrong HTTP method used
- `429 Too Many Requests` – Rate limit exceeded.

---

### 5xx – Server Errors

The server failed to fulfill a valid request

- `500 Internal Server Error` – Generic server failure
- `502 Bad Gateway` – Server received an invalid response from another server
- `503 Service Unavailable` – Server is temporarily down (e.g., maintenance)
- `504 Gateway Timeout` – Server didn’t get a response in time from another server

---

## CRUD Mapping with Status Codes

| CRUD Operation | HTTP Method | Common Status Codes                                            |
| -------------- | ----------- | -------------------------------------------------------------- |
| **Create**     | POST        | 201 (Created), 400 (Bad Request), 409 (Conflict)               |
| **Read**       | GET         | 200 (OK), 404 (Not Found)                                      |
| **Update**     | PUT / PATCH | 200 (OK), 204 (No Content), 400 (Bad Request), 404 (Not Found) |
| **Delete**     | DELETE      | 200 (OK), 204 (No Content), 404 (Not Found)                    |
