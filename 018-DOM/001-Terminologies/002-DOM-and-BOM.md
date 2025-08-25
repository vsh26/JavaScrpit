# DOM and BOM

## DOM (Document Object Model)
        
- The DOM is a programming interface for HTML and XML documents.

- It represents the structure of a web page as a tree of objects that can be accessed and modified using JavaScript.

- Key Points:
    - When a browser loads an HTML page, it converts the HTML into a structured tree of objects.
    - This tree is the DOM.
    - Each element in the HTML becomes a node in the DOM tree.
    - JavaScript can interact with this tree to read, change, add, or delete content dynamically.

Example DOM Tree:
```
Document
└── html
    ├── head
    └── body
        ├── h1
        └── p
```

## BOM (Browser Object Model)

- BOM is the part of the browser environment that allows JavaScript to interact with the browser itself — outside the webpage content.

- BOM includes:
    - `window` (global object)
    - `window.location` (URL, redirect, reload)
    - `window.navigator` (browser/device info)
    - `window.history` (back, forward)
    - `window.alert()`, `prompt()`, `confirm()`
    - `window.screen` (screen size)

## DOM vs BOM Summary:

- DOM - Interaction with the webpage (`window.document`)
- BOM - Interaction with the browser (window, tabs, navigation, screen, etc.)

Both DOM and BOM are parts of the global `window` object.