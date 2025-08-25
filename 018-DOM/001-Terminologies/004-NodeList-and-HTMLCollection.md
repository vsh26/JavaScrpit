# NodeList vs HTMLCollection

> Both NodeList and HTMLCollection are array-like collections of DOM nodes, but they differ in how they are created, what they contain, and how they behave.

## NodeList

- A static or live list of nodes (elements, text nodes, comments, etc.)
- It’s not a real array, but we can access elements by index and use `.length`. Some NodeLists support `.forEach()`, but not all array methods.

Returned by:
- `document.querySelectorAll()` (static)
- `Node.childNodes` (live)

## HTMLCollection

- An array-like, live collection of only HTML element nodes (not text, comments).
- It’s not a real array, but we can access elements by index and use `.length`. They do not support method likes `.forEach()`, `.map()`, etc.

Returned by:

- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `element.children`

## Summary

| Feature               | **NodeList**      | **HTMLCollection**      |
| --------------------- | ----------------- | ----------------------- |
| Contains              | Any node          | Element nodes only      |
| Live                  | ❌ Usually not    | ✅ Always live          |
| Loop with `forEach()` | ✅ Yes            | ❌ No (convert first)   |
| Use case              | General querying  | Element-based filtering |
| Convert to array      | `Array.from(...)` | `Array.from(...)`       |

