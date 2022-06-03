// Optimization for logical expressions
// Bypasses subsequent expressions in && or || based
// on truthy or falsy

'use strict';

const btnShortCircuitingAnd = document.getElementById('btnShortCircuitingAnd');
const btnShortCircuitingOr = document.getElementById('btnShortCircuitingOr');

btnShortCircuitingAnd.onclick = function () {
    let result;

    result = isColorRed('Black') && isGreaterThan1400(1400);
}

function isColorRed(value) {
    console.log('In the isColorRed() function');
    return value === 'Red';
}

function isGreaterThan1400(value) {
    console.log('In the isGreaterThan1400() functioni');
    return value > 1400;
}

btnShortCircuitingOr.onclick = function () {
    let result;
    
    console.log('');
    console.log('Calling isColorRed() first');

    // Each expression is evaluated until one returns a true
    result = isColorRed('Red') || isGreaterThan1400(200);

    // the rest are then skipped
    console.log('');
    console.log('Calling isGreaterThan1400() first');
    result = isGreaterThan1400(200) || isColorRed('Black');
}