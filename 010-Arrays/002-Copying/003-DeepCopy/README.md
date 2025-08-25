# Deep Copy

- A deep copy duplicates everything, including nested arrays and nested objects.
- It ensures that the original and the copy are completely independent.

| Method                            | Preserves `undefined` | Preserves `Symbol` | Preserves `Function` | Handles circular refs |
| --------------------------------- | --------------------- | ------------------ | -------------------- | --------------------- |
| `JSON.parse(JSON.stringify(obj))` | ❌                    | ❌                 | ❌                   | ❌                     |
| `structuredClone(obj)`            | ✅                    | ❌                 | ❌                   | ✅                     |
| `lodash.cloneDeep(obj)`           | ✅                    | ✅                 | ✅                   | ✅                     |
