function greeting() {
    let message = 'Hello';
    let sayHi = function() {
        let message = 'Hi';
    }
    sayHi();
    console.log(message);
}

greeting();