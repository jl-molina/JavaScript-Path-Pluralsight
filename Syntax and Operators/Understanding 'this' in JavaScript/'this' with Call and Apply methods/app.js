'use strict';

const btnThis = document.getElementById('btnThis');

btnThis.onclick = function() {
    let product = {
        'productID': 100,
        'description': 'ball',
        'cost': 120,
        'price': 150,
        profit: function() {
            return (this.price - this.cost).toLocaleString('en-US', {
                style: 'currency', currency: 'USD'
            });
        }
    }

    let product2 = {
        'cost': 130,
        'price': 170
    }

    // Call using reference to 'product' properties
    console.log(product.profit.call(product));
    // Call using regerence to 'product2' properties
    console.log(product.profit.call(product2));
    console.log('');
    console.log(product.profit.apply(product));
    console.log(product.profit.apply(product2));
}