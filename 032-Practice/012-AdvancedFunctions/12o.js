function removeEggs(foods){
    let eggCount = 0;

    const result = foods.filter((food) => {

        if(food === 'egg' && eggCount < 2){
            eggCount++;
            return false;
        }
        return true;
    });
    
    return result;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));