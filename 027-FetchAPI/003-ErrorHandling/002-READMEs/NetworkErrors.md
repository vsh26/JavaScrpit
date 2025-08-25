# Network Errors

Network errors occur when a request cannot be completed due to issues outside the server’s response.

- These happen before the server can even send a response.
- That’s why `fetch()` rejects the promise (goes straight to `.catch()`)

## Causes of Network Errors

- **No Internet connection** – device is offline
- **DNS failure** – domain name cannot be resolved
- **Connection refused** – server is unreachable
- **CORS issues** – request blocked by browser security policy
- **Timeouts** – request takes too long and fails
- **SSL/TLS errors** – certificate mismatch or invalid HTTPS setup

## Important point with Fetch API

- `fetch()` only rejects its promise on network errors.
- If the request reaches the server and the server replies (even with `404` or `500`), it is not a network error. In those cases, `fetch()` resolves, but `response.ok` will be `false`.
- E.g.:

    | Case                     | What happens?                             |
    | ------------------------ | ----------------------------------------- |
    | No internet / DNS fail   | Network error → `fetch` rejects           |
    | Wrong URL path (`/oops`) | `404 Not Found` → not network             |
    | Server crash             | `500 Internal Server Error` → not network |
