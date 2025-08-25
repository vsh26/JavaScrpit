# Event Bubbling

When an event happens on a DOM element, it bubbles up (i.e., propagates upward) through its ancestors.

- Exa:
    ```HTML
    <div id="parent">
    <button id="child">Click Me</button>
    </div>
    ```

    ```JavaScript
    document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
    });

    document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
    });
    ```

- Output on clicking `<button>`:
    ```
    Child clicked
    Parent clicked
    ```
    The click event bubbles from `button` → `div` → `body` → `html` → `document`

- Stop bubbling
    ```JavaScript
    child.addEventListener("click", function (e) {
    e.stopPropagation(); // Stops bubbling
    });
    ```
