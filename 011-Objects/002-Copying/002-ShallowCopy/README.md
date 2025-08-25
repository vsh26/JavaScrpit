# Shallow Copy

A **shallow copy** means the object itself is copied, but nested objects or arrays are still shared by reference.

## Behaviour

- Only top-level properties are cloned.
- Nested objects remain linked between the original and the copy.

## Methods

- `Object.assign()`         
- Spread Operator `{...obj}`
- `Object.fromEntries()`    

## Limitation
- Changes to nested data in the copied object affect the original object.
