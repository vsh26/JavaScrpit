function removeEggs(foods){
    const result = foods.filter((food) => food !== 'egg');
    return result;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));