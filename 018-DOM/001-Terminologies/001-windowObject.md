# `window` - The Window Object (Global Object in Browser)

- The `window` object is the global object in the browser environment. It represents the browser window or tab and contains everything:
    - The DOM (`document`)
    - Browser APIs
    - Global variables and functions

- Everything declared in the global scope in HTML/JavaScript becomes a part of the `window` object.

- In Node.js, `window` is not defined — using it will throw a ReferenceError, because Node uses a different global object (`global`).

- The `window` object contains:

    1. Document-related properties
        - `window.document` → The DOM
    2. Browser dialogs (popups)
        - `alert()`, `prompt()`, `confirm()`
    3. Timers
        - `setTimeout()`, `setInterval()`
    4. Window size and scroll info
        - `innerWidth`, `scrollX`, etc.
    5. Storage
        - `localStorage`, `sessionStorage`
    6. Networking
        - `fetch()`, `XMLHttpRequest`, `navigator.onLine`
    7. Debugging / DevTools
        - `console.log()`, `console.error()`
    8. Events and Event Handlers
        - `addEventListener()`, `onload`, `onresize`, etc.

- In practice, most of the time we can omit the `window.` prefix:
    - `alert("Hi")` is the same as `window.alert("Hi")`