// Convert a String to an Array Using Spread Operator (...)
function stringToArray() {
    let productNumber = 'FR-R92B-58';

    let values = [...productNumber];

    console.log(values);
}

stringToArray();