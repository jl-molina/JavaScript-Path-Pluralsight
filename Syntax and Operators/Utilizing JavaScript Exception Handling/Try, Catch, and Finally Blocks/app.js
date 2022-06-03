'use strict';

const btnTry = document.getElementById('btnTry');
const btnTryFinally = document.getElementById('btnTryFinally');
const btnTryFinallySuccess = document.getElementById('btnTryFinallySuccess');

btnTry.onclick = function () {
    let result;

    try {
        result = x / 10;
        console.log('This line will never run');
    } catch (error) {
        console.log(error.message);
    }
}

btnTryFinally.onclick = function () {
    let result;

    try {
        console.log('An error will occur');
        result = x / 10;
        console.log('This line will never run');
    } catch (error) {
        console.log(`In the catch block: ${error.message}`);
    } finally {
        console.log('In the finally block');
    }
}

btnTryFinallySuccess.onclick = function () {
    let result;
    let x = 100;

    try {
        console.log("An error won't occur");
        result = x / 10;
        console.log('This line will run');
    } catch (error) {
        console.log(`In the catch block: ${error.message}`);
    } finally {
        console.log('In the finally block');
    }
}