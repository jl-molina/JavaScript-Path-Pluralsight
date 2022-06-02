const btnAssignment = document.getElementById('btnAssignment');

btnAssignment.onclick = function () {
    let price = 200;

    console.log(`price = ${price.toString()}`);

    //Addition
    price += 100;
    console.log(`price += 100 = ${price.toString()}`);

    //Subtraction
    price -= 100;
    console.log(`price -= 100 = ${price.toString()}`);

    //Multiplication
    price *= 2;
    console.log(`price *= 2 = ${price.toString()}`);

    //Division
    price /= 2;
    console.log(`price /= 2 = ${price.toString()}`);

    //Exponentiation
    price **= 2;
    console.log(`price **= 2 = ${price.toString()}`);

    //Modulus
    price %= 3;
    console.log(`price %= 3 = ${price.toString()}`);
};