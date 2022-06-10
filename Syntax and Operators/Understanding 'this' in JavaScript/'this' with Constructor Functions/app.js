'use strict';

const btnThis = document.getElementById('btnThis');

btnThis.onclick = function() {
    let product1 = new Product(100,'ball',120,150);
    let product2 = new Product(105,'bat',135,170);

    console.log(product1.profit());
    console.log(product2.profit());
}

function Product(id, name, cost, price) {
    this.productID = id;
    this.name = name;
    this.cost = cost;
    this.price = price;

    this.profit = () => (this.price - this.cost);
}