// Plus sign is overloaded
// when using strings it concatenates
// when using numbers it adds

//Demo
const btnPlus = document.getElementById('btnPlus');

btnPlus.onclick = function () {
    let price = 200;
    let stringValue = '100';
    let result = 0;

    console.log(`price = ${price.toString()}`);

    result = price + stringValue;
    console.log(`price = (number + stringValue) ${result.toString()}`);
    
    result = price + (+stringValue);
    console.log(`price = (number + (+stringValue)) ${result.toString()}`);

}