// 11a
const nums = [10, 20, 30];
nums[nums.length-1] = 99;
console.log(nums);

// 11b
function getLastValue(arr){
    return arr[arr.length - 1];
}
console.log(getLastValue(nums));

// 11c
function arraySwap(arr){
    const temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;

    return arr;
}

console.log(arraySwap(nums));

// 11d
for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

// 11e
for(let i = 5; i >= 0; i--){
    console.log(i);
}

// 11f
let i = 0;

while(i <= 10){
    console.log(i);
    i += 2;
}

let j = 5;

while(j >= 0){
    console.log(j);
    j--;
}

// 1g
const nums1 = [1, 2, 3];
const nums2 = [];
for(let i = 0; i < nums1.length; i++){
    nums2.push(nums1[i] + 1);
}

console.log(nums2);

// 11h
function addOne(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] += 1;
    }
    return arr;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

// 11i
function addNum(arr, num){
    for(let i = 0; i < arr.length; i++){
        arr[i] += num;
    }
    return arr;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j
function addArrays(arr1, arr2){
    if(arr1.length === arr2.length){
        for(let i = 0; i < arr1.length; i++){
            arr1[i] += arr2[i];
        }
        return arr1;
    }
    return;
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k
function countPositive(arr){
    let positiveCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveCount++;
        }
    }
    return positiveCount;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 11l, 11m
function minMax(arr){

    if(arr.length === 0){
        return {min: null, max: null};
    }

    let arrMin = arr[0];
    let arrMax = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arrMin){
            arrMin = arr[i];
        }

        if(arr[i] > arrMax){
            arrMax = arr[i];
        }
    }

    return {min: arrMin, max: arrMax};
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

// 11n
function countWords(arr){
    const obj = {};

    for(i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }else{
            obj[arr[i]] = 1;
        }
    }

    return obj;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));
