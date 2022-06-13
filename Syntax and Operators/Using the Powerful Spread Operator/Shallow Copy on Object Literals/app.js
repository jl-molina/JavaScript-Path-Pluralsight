let product = {
    productID: 100,
    name: 'chair',
    productNumber: 'FR-R43',
    color: 'black',
    cost: 120.50,
    price: 140.23
};

let prod2 = {...product};

prod2.productID = 999;

console.log(product);
console.log(prod2);

console.log('');
console.log(product.productID);
console.log(prod2.productID);