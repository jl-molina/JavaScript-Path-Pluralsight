// Break: Leave a loop early.
// Continue: Next iteration of a loop.

const btnBreak = document.getElementById('btnBreak');
const btnContinue = document.getElementById('btnContinue');

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
        'cost': 99.20,
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

btnBreak.onclick = function() {
    for (const item of _products) {
        if (item.cost < 20) {
            break;
        }
        console.log(JSON.stringify(item));
    }
}

btnContinue.onclick = function() {
    for (const item of _products) {
        if (item.cost < 100) {
            continue;
        }
        console.log(JSON.stringify(item));
    }
}