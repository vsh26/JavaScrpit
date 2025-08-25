# Events

- Events are actions that happen in the browser — like a user clicking a button, typing in a field, or resizing the window.
- With JavaScript, we can listen for these events and respond accordingly.

## Types of events

| **Event Type** | **Triggered When...**                | **Used On**             |
| -------------- | ------------------------------------ | ----------------------- |
| `click`        | An element is clicked                | Buttons, links, divs    |
| `dblclick`     | Double-clicked                       | Same as above           |
| `mouseover`    | Mouse enters the element area        | Menus, tooltips         |
| `mouseout`     | Mouse leaves the element area        | Same                    |
| `mousemove`    | Mouse moves over an element          | Drawing apps, trackers  |
| `keydown`      | A key is pressed                     | Inputs, document        |
| `keyup`        | A key is released                    | Same                    |
| `input`        | Any input is typed or changed        | `<input>`, `<textarea>` |
| `change`       | Input loses focus after value change | `<select>`, checkboxes  |
| `submit`       | A form is submitted                  | `<form>`                |
| `load`         | Page or image fully loads            | `window`, `<img>`       |
| `scroll`       | User scrolls                         | `window`, containers    |
| `resize`       | Window is resized                    | `window`                |

<br>

## Event object

- Whenever an event occurs (like a click, keypress, submit), JavaScript gives us an event object that contains details about what happened, where, and how.
- You access it via the parameter in your callback function.

| **Property/Method**       | **Description**                                         |
| ------------------------- | ------------------------------------------------------- |
| `event.type`              | Type of the event (`click`, `keydown`, etc.)            |
| `event.target`            | Element **where the event actually happened**           |
| `event.currentTarget`     | Element **the listener is attached to**                 |
| `event.preventDefault()`  | Stops default behavior (form submit, link follow, etc.) |
| `event.stopPropagation()` | Prevents the event from bubbling to parent elements     |
| `event.key`               | Key pressed during keyboard event (`a`, `Enter`, etc.)  |
| `event.code`              | Physical key location (`KeyA`, `ArrowUp`, etc.)         |
| `event.clientX/Y`         | Mouse position (X, Y) in **viewport**                   |
| `event.pageX/Y`           | Mouse position relative to **document**                 |
| `event.which`             | Deprecated, use `key` instead (for legacy support)      |
