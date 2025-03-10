// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        if (obj1 != {} || obj2 != {}) {
            return Object.assign(obj1, obj2);
        }
    }
}
