# Node vs Element

> Every element is a node, but not every node is an element.

### Node
In the DOM, a node is any object that forms part of the document tree.

A node can be:
- An HTML element (`<div>`, `<p>`)
- A text node (plain text)
- A comment
- The document itself

So, the DOM tree is made of nodes of different types.

| Node Type # | Type Name       | Description                | Example                        |
| ----------- | --------------- | -------------------------- | ------------------------------ |
| `1`         | `ELEMENT_NODE`  | HTML tags                  | `<div>`, `<p>`, `<h1>`, etc.   |
| `3`         | `TEXT_NODE`     | Plain text inside elements | `Hello`, inside `<p>Hello</p>` |
| `8`         | `COMMENT_NODE`  | Comments                   | `<!-- this is a comment -->`   |
| `9`         | `DOCUMENT_NODE` | The entire document (root node) | `document`                     |

<br>

### Element
An Element is a type of node — specifically, one that corresponds to an HTML tag (like `<div>`, `<ul>`, `<a>`, etc.)

### DOM Tree Visual Example

```html
<!-- A comment -->
<div id="box">
  Hello <strong>World</strong>
</div>
```

Yields the following DOM Tree:

```
Document (nodeType 9)
├── Comment Node <!-- A comment -->   (nodeType 8)
└── Element Node <div>                (nodeType 1)
    ├── Text Node "Hello "            (nodeType 3)
    └── Element Node <strong>         (nodeType 1)
        └── Text Node "World"         (nodeType 3)
```

### Summary

| Term        | What it represents                        | Node Type                            | Example in HTML               |
| ----------- | ----------------------------------------- | ------------------------------------ | ----------------------------- |
| **Node**    | Any object in the DOM tree                | Can be: element, text, comment, etc. | Everything                    |
| **Element** | A node that represents an actual HTML tag | Node type = 1                        | `<div>`, `<p>`, `<img>`, etc. |