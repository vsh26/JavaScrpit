/*
    Method 4: Manual recursive deep clone
    - Custom implementation
    - Needs to handle edge cases (functions, symbols, circular refs, etc.)
    - Used for learning or small cases, not preferred in production
*/

function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;
    if (hash.has(obj)) return hash.get(obj); // circular ref

    const result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);

    for (let key of Reflect.ownKeys(obj)) {
        result[key] = deepClone(obj[key], hash);
    }

    return result;
}

const original = {
    name: "Peter",
    tools: { gadget: "Web shooter" }
};
original.self = original;

const copy = deepClone(original);
console.log(copy);
console.log(copy.self === copy);  // true
