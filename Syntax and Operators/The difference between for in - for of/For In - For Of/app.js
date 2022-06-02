// For In itetares over elements of objects (properties and methods)
// Returns key (property/method) name
// object[key] returns value

// Demo
let product = {
    'id': 1000,
    'name': 'Chair',
    'color': 'Black',
    'cost': 201.20,
    'price': 403.10,
    calculateGrossProfit: function() {
        return this.price - this.cost;
    }
};

function forInSample() {
    for (const key in product) {
        console.log(`${key} = ${product[key]}`);
    }
};

// For Of itarates over value in array, string, etc.
// Return object for each iteration

// Demo
let _products = [
    {
        'id': 1000,
        'name': 'Chair',
        'color': 'Black',
        'cost': 201.20,
        'price': 403.10,
    },
    {
        'id': 1001,
        'name': 'Chair',
        'color': 'White',
        'cost': 201.20,
        'price': 403.10,
    },
    {
        'id': 1002,
        'name': 'Chair',
        'color': 'Green',
        'cost': 201.20,
        'price': 403.10,
    }
];

function forOfSample() {
    for (const item of _products) {
        console.log(JSON.stringify(item));
    }
};

// Iterates over a string as an object
function loopStringSample() {
    let productName = 'Chair';
    let letters = '';

    for (const char of productName) {
        letters += char;
    }

    console.log(letters);
};