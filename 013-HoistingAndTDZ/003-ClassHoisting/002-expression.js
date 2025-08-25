const obj = new MyClass(); // ReferenceError

const MyClass = class {
  constructor() {
    this.name = "JS";
  }
};

