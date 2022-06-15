// Simple function
function hello() {
    console.log('Hello world!');
}

hello();

// Function with a parameter and returning a value;
function helloParameter(name) {
    return `Hello ${name}!`;
}

let result = helloParameter('Jose Luis');
console.log(result);

// Multiple parameters
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10,15)); //25

// Receiving arguments without declaring them in the function
function args() {
    for (const element of arguments) {
        console.log(element);
    }
}

args(1,2,3);