function introduction(name, profession) {
    console.log(`My name is ${name} and I'm a ${profession}`);
}

introduction('Jose', 'Programmer');
introduction.apply(undefined, ['Luis', 'Developer']);
introduction.call(undefined, 'Jose Luis', 'Software Developer');