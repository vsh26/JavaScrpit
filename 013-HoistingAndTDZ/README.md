# Hoisting and Temporal Dead Zone

## Hoisting

    - Hoisting is JavaScript’s default behavior.
    - It means that variable and function declarations are moved to the top of their scope (memory is reserved), before code execution.
    - Only the declaration is hoisted — not the initialization.

## Temporal Dead Zone

The Temporal Dead Zone (TDZ) is the time between:
- Entering the scope (like a function or block `{}`), and
- The line where a let or const variable is declared

During this zone
- The variable exists in memory
- But cannot access it
- Access results in a `ReferenceError`

---

## Variable Hoisting

| Keyword | Hoisted | Initialized Before Use | TDZ Exists? | Accessible Before Declaration |
| ------- | ------- | ---------------------- | ----------- | ----------------------------- |
| `var`   | ✅ Yes  | ✅ Yes (`undefined`)   | ❌ No       | ✅ Yes                        |
| `let`   | ✅ Yes  | ❌ No                  | ✅ Yes      | ❌ No (ReferenceError)        |
| `const` | ✅ Yes  | ❌ No                  | ✅ Yes      | ❌ No (ReferenceError)        |

---

## Function Hoisting

| Code Type                   | Hoisted | Initialized      | Accessible before line? | Result           |
| --------------------------- | ------- | ---------------- | ----------------------- | ---------------- |
| Function declaration        | ✅ Yes  | ✅ Yes           | ✅ Yes                  | ✅ Works         |
| `var` + function expression | ✅ Yes  | ✅ as `undefined`| ❌ No (TypeError)       | ❌ TypeError     |
| `let` / `const` + func expr | ✅ Yes  | ❌ No (TDZ)      | ❌ No (ReferenceError)  | ❌ ReferenceError|
| Arrow function (any)        | ✅ Yes  | ❌ No (TDZ)      | ❌ No (ReferenceError)  | ❌ ReferenceError|

---

## Class Hoisting

| Code Type         | Hoisted | Initialized? | TDZ Exists? | Accessible Before Declaration | Result             |
| ----------------- | ------- | ------------ | ----------- | ----------------------------- | ------------------ |
| Class declaration | ✅ Yes  | ❌ No        | ✅ Yes      | ❌ No                         | ❌ `ReferenceError` |
| Class expression  | ✅ Yes  | ❌ No        | ✅ Yes      | ❌ No                         | ❌ `ReferenceError` |

---