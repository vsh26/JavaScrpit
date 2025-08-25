# Function methods:
JavaScript provides three powerful function methods that allow you to explicitly control what `this` refers to when a function is executed.
- call()
- apply()
- bind()

---

## Need for Function methods

These methods are useful when:
- A function is **detached from its object**
- A function is used as a **callback**
- A function is invoked in the **global context** — where `this` can become `undefined` or point to the wrong object

They let you **manually set the value of `this`** — especially helpful when:
- Reusing a method from one object with another
- Preserving `this` in asynchronous callbacks
- Controlling the execution context of a function

---

## `call()`

The call() method is used to call a function and explicitly set the value of this. We can also pass arguments individually.

Syntax:

```
func.call(thisArg, arg1, arg2, ...)
```

Summary:
- Invoke a function immediately
- Explicitly set what this refers to
- Pass arguments individually
- Returns the result of the original function

---

## `apply()`

Similar to call (used to call a function, explicitly set vale of this), but instead of taking arguments seperately, it takes arguments as an array.

Syntax:

```
func.apply(thisArg, [arg1, arg2, ...])
```

Summary:
- Invoke a function immediately
- Explicitly set what this refers to
- Pass arguments as an array
- Returns the result of the original function

---

## `bind()`

Creates a new function with the 'this' value permanently set to a specific object.

Syntax:
```
func.bind(thisArg, arg1, arg2, ...)
```

Summary:
- Does NOT invoke the function immediately
- It returns a new function (a copy of the original function) with fixed `this`.
- It’s used to preserve the this context of a function.
    - Helps when 'this' is lost (e.g., in callbacks or detached functions)

---

## Summary
| Method   | Invokes Immediately? | Accepts Arguments     | Returns New Function? | Purpose                | Return Value            |
|----------|----------------------|------------------------|------------------------|------------------------|--------------------------|
| `call()` | ✅ Yes               | Individually           | ❌ No                  | Set `this` and call    | Function's return value |
| `apply()`| ✅ Yes               | As an array            | ❌ No                  | Set `this` and call    | Function's return value |
| `bind()` | ❌ No                | Individually (optional)| ✅ Yes                 | Set `this` permanently | New bound function      |

