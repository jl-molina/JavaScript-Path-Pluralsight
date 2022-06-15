let person1 = {
    name: 'Mary',
    getName: function() {
        return this.name;
    }
};

let person2 = {
    name: 'John'
};

let getNameCopy = person1.getName.bind(person2);

console.log(getNameCopy());