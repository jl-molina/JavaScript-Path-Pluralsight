let person1 = {name: 'Jose', age: 25};
let person2 = {name: 'Luis', age: 26};

let sayHi = function() {
    console.log(`Hi, ${this.name}`);
}

sayHi.call(person1);