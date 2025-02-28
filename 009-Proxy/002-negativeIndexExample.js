/*

    Accessing array using negative index

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[-1]);

function negativeIndex(arr){

    // function returns new proxy array
    return new Proxy (arr, {

        // Accessing property
        get(target, prop){
            
            // Index must be number
            const index = Number(prop);

            if(index < 0){
                return target[target.length + index];
            }
            
            // handles the case for positive index
            return target[index];
        },

        // Changing the values
        set(target, prop, value){

            // Index must be number
            const index = Number(prop);

            if(index < 0){
                target[target.length + index] = value;
            }else{
                // handles the case for positive index
                target[index] = value;
            }

            // we need to send confirmation
            return true;
        }

    });

}

// console.log(nums[-1]);

let newNums = negativeIndex(nums);  // reference is passed
console.log(newNums[-1]);
console.log(newNums[0]);
console.log(newNums[1]);


// Before Update
console.log(nums);
console.log(newNums);

newNums[-1] = 22;

// After Update
console.log(nums);
console.log(newNums);

// Original array is also changed (because reference is passed)


let newNums1 = negativeIndex([...nums1]);   // copy is created
console.log(newNums1[-1]);
console.log(newNums1[0]);
console.log(newNums1[1]);

// Before Update
console.log(nums1);
console.log(newNums1);

newNums1[-1] = 22;

// After Update
console.log(nums1);
console.log(newNums1);

// Original array is not changed