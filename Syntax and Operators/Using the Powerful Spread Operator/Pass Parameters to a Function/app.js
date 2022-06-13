function spreadForFunctionArgs() {
    multipleParams(1, 2, 3);

    let args = [1, 2, 3];
    multipleParams(...args);
}

function multipleParams(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
    console.log('');
}

spreadForFunctionArgs();