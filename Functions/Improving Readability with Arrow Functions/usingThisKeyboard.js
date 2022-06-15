let message = {
    name: 'Jose Luis',
    regularFunction: function() {
        console.log(`Hello ${this.name}`);
    },
    arrowFunction: () => console.log(`Hi ${this.name}`)
}

message.regularFunction();
message.arrowFunction();