# Shallow Copy

A **shallow copy** of an array creates a new array with the same top-level elements. However, **nested objects or arrays are still shared by reference** — not copied deeply.

## Behaviour
- Top-level values (like numbers or strings) are copied.
- Nested objects or arrays are **not** cloned, only their references are copied.

## Methods
- `slice()`
- Spread operator `[...]`
- `concat()`
- `Array.from()`

## Limitation
- If the original array contains objects, changes to those objects in the copied array will also affect the original.
