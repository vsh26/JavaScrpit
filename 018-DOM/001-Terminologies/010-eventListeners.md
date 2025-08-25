# Event Listeners

- An event listener is a function that waits for a specific event to happen on a specific element, and then runs a callback function when it does.

- Sntax:
    ```JavaScript
    element.addEventListener("event", callback);
    ```

- Common event listener methods

    | **Method**              | **Description**                                 |
    | ----------------------- | ----------------------------------------------- |
    | `addEventListener()`    | Attaches an event handler to the element        |
    | `removeEventListener()` | Removes a previously attached event listener    |
    | `once: true`            | (option) Auto-removes listener after first call |

- `removeEventListener()` works only upon named functions

    - Named function:
        ```JavaScript
        function handleClick() {
            alert("Clicked!");
        }
        btn.addEventListener("click", handleClick);
        btn.removeEventListener("click", handleClick); // can be removed
        ```
    - Anonymous function:
        ```JavaScript
        btn.addEventListener("click", function () {
            alert("Clicked!");
        });
        // Cannot be removed — no reference to the function
        ```

- Optional object (3rd argument):

    - You can pass an options object as the 3rd parameter.

    - Exa:
        ```JavaScript
        element.addEventListener("click", callback, {
            once: true,
            capture: false,
            passive: true
        });
        ```
    
    | **Option** | **Description**                                                                 |
    | ---------- | ------------------------------------------------------------------------------- |
    | `once`     | Executes the callback **only once** and removes it                              |
    | `capture`  | Set to `true` to trigger during **capture phase** instead of bubbling           |
    | `passive`  | Hint to browser: **you won't call `preventDefault()`**, allows smooth scrolling |
