// Why we need classes?

const obj1 = {
    fname : 'Tony',
    lname : 'Stark',
    getFullName : function(){
        return `${this.fname} ${this.lname}`;
    }
};

const obj2 = {
    fname : 'Steve',
    lname : 'Rogers',
    getFullName : function(){
        return `${this.fname} ${this.lname}`;
    }
};

// DRY - Do Not Repeat Yourself, is violated here
// Repeating the same method in multiple objects
console.log(obj1.getFullName());
console.log(obj1.getFullName());
