const btnComparison = document.getElementById('btnComparison');

btnComparison.onclick = function (){
    let price = 200;
    let result = 0;

    console.log(`price = ${price.toString()}`);
    console.log('');

    // Equal to
    console.log(`price == price = ${(price == price).toString()}`);

    // Equal to
    result = price.toString();
    console.log(`price(number) == result(string) = ${(price == result).toString()}`);

    // Equal to/Equal type
    result = price;
    console.log(`price(number) === result(string) = ${(price === result).toString()}`);

     // Equal to/Equal type
    result = price.toString();
    console.log(`price(number) === result(string) = ${(price === result).toString()}`);
    console.log('');

    // Not equal
    resulte = price;
    console.log(`price(number) != result(string) = ${(price != result).toString()}`);

    // Not equal/Not Equal type
    result = price.toString();
    console.log(`price(number) !== result(string) = ${(price !== result).toString()}`);
    console.log('');

    // Greater than
    console.log(`price > 10 = ${(price > 10).toString()}`);

    // Greater than or equal to
    console.log(`price >= price = ${(price >= price).toString()}`);

    // Less than
    console.log(`price < 1500 = ${(price < 1500).toString()}`);

    // Less than or equal to
    console.log(`price <= price = ${(price <= price).toString()}`);

    // Ternary
    result = price < 1500 ? "'less than 1500'" : "'greater than 1500'";
    console.log(`ternary = ${result}`);
}