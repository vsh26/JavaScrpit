# DOM Traversal

- DOM relationships like parent, child, sibling, ancestor, and descendant describe the structure of the DOM tree
- DOM Traversal means navigating between these relationships in the DOM tree.
- Once an element is selected (like with `querySelector()`), we can move up, down, or sideways in the DOM.

## Realtionship terms

| Term           | Meaning                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| **Root Node**  | The topmost node in the DOM tree — typically `document`                 |
| **Leaf Node**  | A node with **no children**                                             |
| **Parent**     | The node that **directly contains** another node                        |
| **Child**      | A node that is **directly inside** another node                         |
| **Sibling**    | Nodes that **share the same parent**                                    |
| **Ancestor**   | Any node **upward** in the tree from a node (parent, grandparent, etc.) |
| **Descendant** | Any node **nested within** another node (child, grandchild, etc.)       |

<br>

---

## Parent nodes

| Property        | Description                                                  | Returns           |
| --------------- | ------------------------------------------------------------ | ----------------- |
| `parentNode`    | Returns the **immediate parent node** (can be any node type) | Node              |
| `parentElement` | Returns the **immediate parent if it is an element**         | Element or `null` |

<br>

---

## Children nodes

| Property            | Description                                    | Returns          |
| ------------------- | ---------------------------------------------- | ---------------- |
| `childNodes`        | All child **nodes** (elements, text, comments) | `NodeList`       |
| `children`          | Only child **element nodes**                   | `HTMLCollection` |
| `firstChild`        | First child **node**                           | Node             |
| `firstElementChild` | First child **element**                        | Element          |
| `lastChild`         | Last child **node**                            | Node             |
| `lastElementChild`  | Last child **element**                         | Element          |

<br>

---

## Sibling nodes

| Property                 | Description                                                           | Returns   |
| ------------------------ | --------------------------------------------------------------------- | --------- |
| `previousSibling`        | Gets the **previous sibling** (any node type: text, comment, element) |  Node     |
| `previousElementSibling` | Gets the **previous sibling element**                                 |  Element  |
| `nextSibling`            | Gets the **next sibling** (any node type)                             |  Node     |
| `nextElementSibling`     | Gets the **next sibling element**                                     |  Element  |

<br>

## Ancestor traversal

| Method                        | Description                              | Returns      |
| ----------------------------- | ---------------------------------------- | ------------ |
| `parentNode`                  | Immediate parent (any node type)         | Node         |
| `parentElement`               | Immediate parent (must be an element)    | Element/`null` |
| `element.closest('selector)`  | Closest matching ancestor (incl. itself) | Element/`null` |

- `closest()` works **upward** and **starts with the element itself**.

<br>

## Descendant traversal

| Method                             | What It Does                                 | Returns        |
| ---------------------------------- | -------------------------------------------- | -------------- |
| `element.querySelector()`          | First matching descendant                    | Element/null   |
| `element.querySelectorAll()`       | All matching descendants                     | NodeList       |
| `element.getElementsByTagName()`   | All matching tags inside (live)              | HTMLCollection |
| `element.getElementsByClassName()` | All matching classes inside (live)           | HTMLCollection |
| `element.children`                 | Only **direct child elements**               | HTMLCollection |
| `element.childNodes`               | Direct children (elements + text + comments) | NodeList       |
| `element.contains(node)`           | Returns `true` if the node is a descendant   | Boolean        |
