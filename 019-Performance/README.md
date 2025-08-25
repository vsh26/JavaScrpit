# Performance, Reflow, Repaint, DocumentFragement

`performance.now()`
- Returns a high-resolution timestamp in milliseconds (It is like a **stopwatch** for code)
- More precise than `Date.now()`
- Useful for measuring performance of code blocks

---

## Reflow
- It is a process of calculating position/ dimensions of elements in DOM (layout recalculation)
- It is a computationally intensive task
- Browser recalculates the layout tree when structure or size changes

**Reflow gets triggered by:**
- Adding/removing elements (`appendChild`, `removeChild`)
- Changing size (`width`, `height`, `padding`, `margin`, `border`)
- Changing fonts (`font-size`, `font-family`)
- Reading layout properties after writing styles (`offsetHeight`, `getBoundingClientRect`)
- Window resize

---

## Repaint
- It is a process of displaying (drawing) content pixel by pixel
- Faster than reflow

**Repaints gets triggered by:**
- `color`, `background`, `visibility`
- `box-shadow`
- `outline`

---

## Performance

So, less repaint and reflow means better performance of code. It is a good practice to use `DocumentFragment` or build-off DOM before inserting (i.e., we insert all elements as a batch)

---

## `DocumentFragment`
- Lightweight, invisible container for DOM nodes
- Looks and behaves like a normal DOM node, but it’s not part of the live DOM tree
- We can create elements, append children, and build subtrees inside it
- When we finally append the fragment to the real DOM → only its children are inserted (the fragment itself disappears)