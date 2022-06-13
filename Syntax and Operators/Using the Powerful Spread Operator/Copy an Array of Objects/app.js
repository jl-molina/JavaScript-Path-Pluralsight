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

function copyObjectArrays() {
    // The array is copied, but the underlying objects are still accessed
    let diff = [..._products];

    diff[0].productID = 999;

    console.log(_products[0].productID);
    console.log(diff[0].productID);
}

copyObjectArrays();