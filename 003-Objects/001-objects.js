const person = {
    firstName : 'Tony',
    lastName : 'Stark',
    hobbies : ['Coding', 'Reading'],
    isIronMan : true,

    // function
    getFullName: function(){
        return 'Tony Stark';
    },

    // object
    address : {
        houseNo: 3000,
        street: 10,
        countryCode: 'IN',
        state : 'MH'
    }
};

console.log(person.firstName);
console.log(person.getFullName());
console.log(person.address);


const remote ={
    color : 'black',
    brand : 'Samsung',
    dimensions : {
        height : 1,
        width : 1
    },
    turnOn : function(){

    },
    turnOff : function(){

    }
};