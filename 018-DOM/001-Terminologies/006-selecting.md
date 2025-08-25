# Selecting elements

Selecting elements means using JavaScript to get references to HTML elements so you can manipulate or read their properties.

| **Method**                 | **Selector Type**    | **Description**                                    | **Return Type**     | **Notes**                                               |
| -------------------------- | -----------------    | -------------------------------------------------- | ------------------- | ------------------------------------------------------- |
| `getElementById(id)`       | ID (`id`)            | Selects **one element** by its ID                  | `Element` or `null` | Fastest method, returns only one element                |
| `getElementsByClassName()` | Class (`class-name`) | Selects **all elements** with the given class name | `HTMLCollection`    | Live collection; not iterable with `forEach()` |
| `getElementsByTagName()`   | Tag name (`div`)     | Selects **all elements** with the given tag name   | `HTMLCollection`    | Live collection; includes nested elements               |
| `querySelector()`          | CSS Selector         | Returns **first matching element**                 | `Element` or `null` | Most flexible; supports any valid CSS selector          |
| `querySelectorAll()`       | CSS Selector         | Returns **all matching elements**                  | `NodeList`          | Static collection; supports `forEach()` directly        |
