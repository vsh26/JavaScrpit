# Session Storage

`sessionStorage` allows you to store key–value pairs for the duration of a single tab session.
- Data is lost when the tab or browser is closed
- Only available within the same tab/window (not shared)
- Useful for temporary state: form drafts, one-time inputs, wizard steps, etc

## Use Cases

| Use Case                           | Why sessionStorage?                       |
| ---------------------------------- | ----------------------------------------- |
| Multi-step forms                   | Store values while user fills a long form |
| Temporary login data before submit | Don't persist across tabs or refreshes    |
| Onboarding progress in 1 tab       | Clear automatically after session ends    |
| Data you don’t want to persist     | Like OTPs, previews, temporary search     |

<br>

## Session Storage API Summary

| Method                               | Description               |
| ------------------------------------ | ------------------------- |
| `sessionStorage.setItem(key, value)` | Save a value              |
| `sessionStorage.getItem(key)`        | Get a value by key        |
| `sessionStorage.removeItem(key)`     | Delete a specific item    |
| `sessionStorage.clear()`             | Remove all items          |
| `sessionStorage.key(index)`          | Get key by index          |
| `sessionStorage.length`              | Get number of stored keys |

> [!CAUTION]
> Anyone can:
> - Open DevTools → Application → Session Storage
> - Read or edit anything
> Use it only for non-sensitive, client-side state