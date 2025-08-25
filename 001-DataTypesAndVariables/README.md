# Data Types and Variables

## Data types

1. Primitive:
    - String
    - Numbers
        - Integer
        - Float
    - Boolean
    - Null (non-existent or invalid value)
    - Undefined (declared, but not initialised)
    - Symbol
    - BigInt

2. Non-primitive:
    - Array `[ ]`
    - Object `{ }`

## Variable declaration

- `var`
- `const`
- `let`

|           | can be redeclared (in same scope) | Update    | Scope     |
|-----------|-----------------------------------|-----------|-----------|
| `var`     |   Yes ✅                          | Yes ✅    | global    |
| `let`     |   No ❌                           | Yes ✅    | block     |
| `const`   |   No ❌                           | No ❌     | block     |

