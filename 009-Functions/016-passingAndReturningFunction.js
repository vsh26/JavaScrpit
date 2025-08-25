/* 
    Exa: Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
    Return the result of calling `makeTea`.
*/

function makeTea(teaType){
  return teaType;
}

function processTeaOrder(teaFunction){
  return teaFunction("earl grey");
}

const res = processTeaOrder(makeTea);
console.log(res);