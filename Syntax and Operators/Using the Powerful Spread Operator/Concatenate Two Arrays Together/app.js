// Concatenate two arrays together
let _products = [
    {
        productID: 100,
        name: 'chair',
        productNumber: 'FR-R43',
        color: 'black',
        cost: 120.50,
        price: 140.23
    },
    {
        productID: 101,
        name: 'table',
        productNumber: 'FR-R54',
        color: 'white',
        cost: 320.50,
        price: 570.87
    }
];

let _newProducts = [
    {
        productID: 102,
        name: 'chair',
        productNumber: 'FR-R45',
        color: 'white',
        cost: 145.50,
        price: 254.23
    },
    {
        productID: 103,
        name: 'table',
        productNumber: 'FR-R56',
        color: 'black',
        cost: 320.50,
        price: 580.97
    }
];

function concatenateArray() {
    let allProducts = _products.concat(_newProducts);
    console.log(allProducts.length);

    let spProducts = [..._products, ..._newProducts];
    console.log(spProducts.length);
}

concatenateArray();