'use strict';

const btnLogical = document.getElementById('btnLogical');

btnLogical.onclick = function() {
    let price = 200;

    // AND (&&) Operator
    if (price > 100 && price < 1000) {
        console.log('Price > 10 && price < 1000 is true');
    }

    // AND (&&) Operator
    if (price > 10 && price < 200) {
        console.log('Price > 10 && price < 200 is true');
    } else {
        console.log('Price > 10 && price < 200 is false');
    }

    // OR (||) Operator
    if (price > 10 || price < 1000) {
        console.log('Price > 10 || price < 1000 is true');
    }

    // OR (||) Operator
    if (price > 10 || price > 1000) {
        console.log('Price > 10 || price > 1000 is true');
    }

    // NOT (!) Operator
    if (!(price < 10)) {
        console.log('!(price < 10) is true');
    }
}