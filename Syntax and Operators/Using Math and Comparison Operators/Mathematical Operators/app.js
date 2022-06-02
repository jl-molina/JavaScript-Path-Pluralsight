'use strict';

const btnMath = document.getElementById('btnMath');

btnMath.onclick = function () {
    let price = 200;
    let result = 0;

    console.log(`Price = ${price.toString()}`);

    //Addition
    result = price + 100;
    console.log(`Price + 100 = ${result.toString()}`);

    //Subtraction
    result = price - 10;
    console.log(`Price - 10 = ${result.toString()}`);

    //Multiplication
    result = price * 2;
    console.log(`Price * 2 = ${result.toString()}`);

    //Division
    result = price / 2;
    console.log(`Price / 2 = ${result.toString()}`);
    
    //Exponentiation
    result = price ** 2;
    console.log(`Price ** 2 = ${result.toString()}`);

    //Modulus
    result = price % 3;
    console.log(`Price % 3 = ${result.toString()}`);
    
    //Increment
    result = price++;
    console.log(`result = price++ = ${result.toString()}`);
    console.log(`price = ${price.toString()}`);
    result = ++price;
    console.log(`result = ++price = ${result.toString()}`);

    //Increment
    result = price--;
    console.log(`result = price-- = ${result.toString()}`);
    console.log(`price = ${price.toString()}`);
    result = --price;
    console.log(`result = --price = ${result.toString()}`);
}