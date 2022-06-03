'use strict';

const btnInstanceOf = document.getElementById('btnInstanceOf');

btnInstanceOf.onclick = function() {
    let prod = new Product(1000, 'chair', 123.32);
    let dt = new Date();
    let name = new String('Product Name');
    let value = 'A simple string';

    console.log(`prod instanceof Product = ${(prod instanceof Product).toString()}`);
    console.log(`prod instanceof Object = ${(prod instanceof Object).toString()}`);
    console.log(`dt instanceof Date = ${(dt instanceof Date).toString()}`);
    console.log(`dt instanceof Object = ${(dt instanceof Object).toString()}`);
    console.log(`name instanceof String = ${(name instanceof String).toString()}`);
    console.log(`value instanceof String = ${(value instanceof String).toString()}`);
    console.log(`value instanceof Object = ${(value instanceof Object).toString()}`);

}

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}