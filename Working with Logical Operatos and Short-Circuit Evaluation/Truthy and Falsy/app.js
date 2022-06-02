// Any variable with a value ("Hey", 10, etc.) or a Boolean true is "true".
// Any variable = false, null, undefined, NaN, "" is "false".

// Demo
'use strict';

const btnTrueFalse = document.getElementById('btnTrueFalse');

btnTrueFalse.onclick = function () {
    let price = 200;
    let color = 'Red';
    let result;

    console.log("Check for 'true' values");
    // Evaluate the expression
    result = price > 10;
    console.log(result);

    // Test the expression
    if (price > 10) {
        console.log('Price is > 10');
    }

    // Check if price has something other than zero
    if (price) {
        console.log('Price is != 0');
    }

    // Check if color has characters in it
    if (color) {
        console.log('Color has a value');
    }

    console.log('');
    console.log("Check for 'false' values");

    // Set value to null, it becomes false
    color = null;
    console.log(`color == null = ${Boolean(color)}`);

    // Set value to empty string, it becomes false
    color = '';
    console.log(`color == "" = ${Boolean(color)}`);

    // Set value to undefined, it becomes false
    color = undefined;
    console.log(`color == undefined = ${Boolean(color)}`);

    // Declare variable and don't initialize, it is false
    let value;
    console.log(`let value = ${Boolean(value)}`);

    // Result of NaN is false
    value = 100 / 'test';
    console.log(`100/'test' = ${Boolean(value)}`);
};