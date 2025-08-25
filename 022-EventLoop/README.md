# Event Loop

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations despite being single-threaded, without blocking the main execution thread.

- JavaScript has one Call Stack, so it can only execute one task at a time
- Async tasks (like setTimeout, fetch, DOM events) are handled by the environment (browser / Node) and queued for later
    - The Event Loop coordinates execution:
    - Run one task (from Call Stack)
    - Run all microtasks (Promises, queueMicrotask)
    - Optionally render UI updates
    - Repeat

### Sample Code
 
<img width="424" height="276" alt="image" src="https://github.com/user-attachments/assets/238bdf28-e6d6-4f1c-aa60-2af39638f085" />

### Visual Representation of Event Loop
  
<img width="787" height="458" alt="image" src="https://github.com/user-attachments/assets/cf1145ee-6f86-40d7-8bd5-dab23efaf95c" />

<img width="787" height="458" alt="image" src="https://github.com/user-attachments/assets/a112123b-5a89-4d2a-9205-a001116c717c" />

<img width="787" height="458" alt="image" src="https://github.com/user-attachments/assets/e312b9f3-2b32-4d71-a99e-329ea25d2ad0" />

<img width="787" height="458" alt="image" src="https://github.com/user-attachments/assets/cfd46f62-925a-4897-83cf-f0bba0915c63" />

<img width="787" height="458" alt="image" src="https://github.com/user-attachments/assets/2de13f9e-89fe-4db0-82d5-affcd6b56a8a" />
