# Manipulating elements

## Text/ HTML

| **Property/Method**        | **Description**                                   | **Example**                                       |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `textContent`              | Sets or gets the **text** (ignores HTML)          | `el.textContent = "Hello"`                        |
| `innerText`                | Similar to `textContent`, respects CSS visibility | `el.innerText = "Hi"`                             |
| `innerHTML`                | Sets or gets HTML content (including tags)        | `el.innerHTML = "<strong>Hi</strong>"`            |
| `outerHTML`                | Gets/replaces the **entire element** + HTML       | `console.log(el.outerHTML)`                       |

<br>

## Attributes

| **Property/Method**        | **Description**                                   | **Example**                                       |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `getAttribute()`           | Gets an attribute value                           | `el.getAttribute("href")`                         |
| `setAttribute()`           | Sets an attribute                                 | `el.setAttribute("href", "https://")`             |
| `removeAttribute()`        | Removes an attribute                              | `el.removeAttribute("disabled")`                  |

<br>

## Classes

| **Property/Method**        | **Description**                                   | **Example**                                       |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `classList.add()`          | Adds class(es)                                    | `el.classList.add("active")`                      |
| `classList.remove()`       | Removes class(es)                                 | `el.classList.remove("hidden")`                   |
| `classList.toggle()`       | Toggles class presence                            | `el.classList.toggle("open")`                     |
| `classList.contains()`     | Checks if class exists                            | `el.classList.contains("dark")`                   |

<br>

## Styles

| **Property/Method**        | **Description**                                   | **Example**                                       |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `style.propertyName`       | Directly modify inline styles                     | `el.style.color = "red"`                          |
| `style.cssText`            | Set multiple styles as string                     | `el.style.cssText = "color:blue; font-size:18px"` |

<br>

## Structure (DOM)

| **Property/Method**        | **Description**                                   | **Example**                                       |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `createElement()`          | Creates a new element                             | `document.createElement("div")`                   |
| `append() / appendChild()` | Adds element/content as last child                | `el.append(newItem)`                              |
| `prepend()`                | Adds element/content as **first child**           | `el.prepend(newItem)`                             |
| `before()` / `after()`     | Inserts content **before or after** the element   | `el.after(anotherEl)`                             |
| `remove()`                 | Removes the element itself                        | `el.remove()`                                     |
| `replaceWith()`            | Replaces the element with another                 | `el.replaceWith(newNode)`                         |

- `append()` can take multiple nodes/strings, while `appendChild()` accepts only one node
- `createElement()` creates a new element node in memory — but it does not appear on the actual webpage (DOM) until you explicitly insert (append) it somewhere.


<br>

## Input Values

| **Property/Method** | **Description**                        | **Example**                      |
|---------------------|----------------------------------------|----------------------------------|
| `value`             | Get/set the value of form elements     | `inputEl.value = "New value"`    |
| `checked`           | Boolean: checkbox/radio is checked     | `checkboxEl.checked = true`      |
| `selectedIndex`     | Index of selected `<option>` in `<select>` | `selectEl.selectedIndex = 2`  |
