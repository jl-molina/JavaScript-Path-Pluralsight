function simpleSwitch() {
    let productId = 3;

    switch (productId) {
        case 1:
            console.log('Product 1');
            break;
        case 2:
            console.log('Product 2');
            break;
        default:
            console.log('Unknown product');
            break;
    }
}

function multipleCase() {
    let color = 'Dark blue';

    switch (color) {
        case 'Red':
        case 'Pink':
            console.log('The color is red');
            break;
        case 'Blue':
        case 'Dark blue':
        case 'Light blue':
            console.log('The color is blue');
            break;
        case 'Grey':
        case 'Gray':
            console.log('The color is grey');
            break;
        default:
            console.log('Unknown color');
            break;
    }
}

function forgetABreak() {
    let productId = 2;

    switch (productId) {
        case 1:
            console.log('Frame');
            break;
        case 2:
            console.log('Bike');
        case 3:
            console.log('Bag');
            break;
        default:
            console.log('Unknown product');
            break;
    }
}

function strictComparison() {
    let employeeID = '2';

    switch (employeeID) {
        case 1:
            console.log('first employee');
            break;
        case 2:
            console.log('second employee');
            break;
        case 3:
            console.log('third employee');
            break;
        default:
            console.log('Unknown employee');
            break;
    }
}