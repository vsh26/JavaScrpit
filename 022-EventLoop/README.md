# Event Loop

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations despite being single-threaded, without blocking the main execution thread.

- JavaScript has one Call Stack, so it can only execute one task at a time
- Async tasks (like setTimeout, fetch, DOM events) are handled by the environment (browser / Node) and queued for later
    - The Event Loop coordinates execution:
    - Run one task (from Call Stack)
    - Run all microtasks (Promises, queueMicrotask)
    - Optionally render UI updates
    - Repeat