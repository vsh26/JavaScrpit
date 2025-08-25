# Local Storage
Local Storage allows you to store key–value pairs in the browser — persistently (until explicitly cleared).

- Stored data doesn’t expire (unlike session storage)
- Data stays even after the browser/tab is closed
- Storage is per domain (you can’t access other sites’ data)

## Use Cases

| Use Case                          | Why Local Storage?                   |
| --------------------------------- | ------------------------------------ |
| Save user preferences (dark mode) | Persistent across reloads            |
| Keep form input drafts            | Resume input after refresh           |
| Remember login state (non-auth)   | Quick access to basic user data      |
| Track client-side analytics       | Avoid sending every update to server |

<br>

## Local Storage API Summary

| Method                             | Description                      |
| ---------------------------------- | -------------------------------- |
| `localStorage.setItem(key, value)` | Store a value                    |
| `localStorage.getItem(key)`        | Retrieve value by key            |
| `localStorage.removeItem(key)`     | Remove specific item             |
| `localStorage.clear()`             | Clear all keys for this domain   |
| `localStorage.length`              | Count of stored items            |
| `localStorage.key(index)`          | Get key name at a specific index |

<br>

> [!CAUTION]
> Anyone can:
> - Open DevTools → Application → Local Storage
> - Read or edit anything
> Use it only for non-sensitive, client-side state