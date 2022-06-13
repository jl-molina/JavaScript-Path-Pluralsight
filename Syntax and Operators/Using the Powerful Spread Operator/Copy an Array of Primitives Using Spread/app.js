// Copy Array
function copyArray() {
    let arr = [2,4,6];
    let arr2 = [...arr];

    arr2.push(8);
    arr2[0] = 99;

    console.log(arr);
    console.log(arr2);
}

copyArray();