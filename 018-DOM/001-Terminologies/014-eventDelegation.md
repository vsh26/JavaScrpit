# Event Delegation

Instead of adding listeners to every child, attach one to a common parent and use event.target to identify the actual clicked element.

- Exa:
    ```HTML
    <ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    </ul>
    ```

    ```JavaScript
    document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        console.log("Clicked on:", e.target.textContent);
    }
    });
    ```
    
    - Now you can add <li> dynamically, and the listener still works!