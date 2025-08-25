# Adding and Removing elements to DOM

## Adding elements

| **Method**                       | **Description**                                       | **Example**                                        |
| -------------------------------- | ----------------------------------------------------- | -------------------------------------------------- |
| `appendChild(node)`              | Appends a node as the **last child**                  | `parent.appendChild(newEl)`                        |
| `append(...nodes)`               | Appends one or more nodes/strings                     | `parent.append(el, "text")`                        |
| `prepend(...nodes)`              | Inserts at the **beginning** of parent                | `parent.prepend(newEl)`                            |
| `before(node)`                   | Inserts **before** a node                             | `el.before(newEl)`                                 |
| `after(node)`                    | Inserts **after** a node                              | `el.after(newEl)`                                  |
| `insertBefore(new, ref)`         | Insert new node **before a reference node**           | `parent.insertBefore(newEl, referenceEl)`          |
| `insertAdjacentElement(pos, el)` | Inserts a **DOM element** relative to another element | `el.insertAdjacentElement("beforebegin", newEl)`   |
| `insertAdjacentHTML(pos, html)`  | Inserts **HTML string** relative to an element        | `el.insertAdjacentHTML("afterbegin", "<p>Hi</p>")` |
| `insertAdjacentText(pos, text)`  | Inserts **plain text** relative to an element         | `el.insertAdjacentText("beforeend", "Hello")`      |

### `insertAdjacent*` Position Values

| **Position**    | **Meaning**                                |
| --------------- | ------------------------------------------ |
| `"beforebegin"` | Before the element itself (as a sibling)   |
| `"afterbegin"`  | Inside the element, before its first child |
| `"beforeend"`   | Inside the element, after its last child   |
| `"afterend"`    | After the element itself (as a sibling)    |


<br>

## Removing elements

| **Method**               | **Description**                      | Example                     |
| ------------------------ | ------------------------------------ | --------------------------- |
| `element.remove()`       | Removes the selected element itself  | `el.remove()`               |
| `parent.removeChild(el)` | Removes a specific child node        | `parent.removeChild(child)` |
| `replaceWith(newNode)`   | Replaces current node with a new one | `el.replaceWith(newNode)`   |