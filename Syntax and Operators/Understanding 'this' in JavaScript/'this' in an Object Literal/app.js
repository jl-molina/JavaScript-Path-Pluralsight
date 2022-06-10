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

    console.log(product.profit());
}