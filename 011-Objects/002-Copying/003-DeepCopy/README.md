# Deep Copy
A **deep copy** duplicates everything — including nested objects — so the original and the copy are completely independent.


## Methods

| Method                           | Preserves `undefined` | Preserves `Symbol` | Preserves `Function` | Handles Circular Refs | 
|----------------------------------|------------------------|--------------------|----------------------|----------------------|
| `JSON.parse(JSON.stringify())`   | ❌                     | ❌                 | ❌                   | ❌                   |
| `structuredClone()`              | ✅                     | ❌                 | ❌                   | ✅                   | 
| `lodash.cloneDeep()`             | ✅                     | ✅                 | ✅                   | ✅                   |
| Manual Recursion                 | Depends on code        | Depends on code    | Depends on code      | ✅ (if handled)      |
