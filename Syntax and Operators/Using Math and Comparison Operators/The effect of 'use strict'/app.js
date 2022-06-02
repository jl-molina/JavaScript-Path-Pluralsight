// Use Strict is ignored by older browsers
// Forces all variables to be declared
// Mistyped variable names are created globally scoped

//Demo
const btnStrict = document.getElementById('btnStrict');

btnStrict.onclick = function () {
    'use strict';

    let result = 10;
    
    console.log(result);
}

