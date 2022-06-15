function greet(message, ...names) {
    console.log(`${message} everyone!`);
    names.forEach(name => console.log(`Hi, ${name}.`));
}

greet('Hello', 'José Luis', 'Pedro', 'Ignacio');