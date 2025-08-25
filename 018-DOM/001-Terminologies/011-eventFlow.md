# Event Flow
Event flow describes the path an event takes through the DOM when triggered — from the topmost ancestor to the target and then back up.

## Three phases of event flow

| **Phase**        | **Direction** | **What Happens**                                   |
| ---------------- | ------------- | -------------------------------------------------- |
| **1. Capturing** | Top → Target  | Event travels down from `window` to target element |
| **2. Target**    | —             | Event runs on the target element itself            |
| **3. Bubbling**  | Target → Top  | Event bubbles back up from the target to the root  |

<br>

## Visual representation

```HTML
window
  ↓
document
  ↓
<html>
  ↓
<body>
  ↓
<div id="parent">
  ↓
<button id="child"> ← Event target
  ↑
</div>
  ↑
<body>
  ↑
<html>
  ↑
document
  ↑
window
```

## Understanding through code

```HTML
<div id="outer">
  <button id="inner">Click Me</button>
</div>
```

```JavaScript
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer (Capturing)");
}, true); // capture = true

inner.addEventListener("click", () => {
  console.log("Inner (Target)");
});

outer.addEventListener("click", () => {
  console.log("Outer (Bubbling)");
}); // default is bubbling
```

- Output on click:
    ```
    Outer (Capturing)
    Inner (Target)
    Outer (Bubbling)
    ```

## `event.stopPropagation()` 
Stops event from continuing (bubbling or capturing) any further.
```JavaScript
inner.addEventListener("click", function (e) {
  e.stopPropagation();          // Stops bubbling
  console.log("Stopped here!");
});
```

## `event.preventDefault()`
Cancels the default browser behavior associated with an event.
```JavaScript
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  // Validate manually
});
```
