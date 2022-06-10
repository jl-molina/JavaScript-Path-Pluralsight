'use strict';

const btnThis = document.getElementById('btnThis');

btnThis.onclick = function() {
    // Global scope - 'this' is mapped to global/window object
    console.log('Begin: global scope sample');
    console.log(this.toString());
    console.log(`this === windows = ${(this === window).toString()}`);
    console.log('End: global scope sample');

    // Function scope - 'this' is mapped to global/window object
    // Uncomment 'use strict' above to show how it affects this function
    functionScope();
}

function functionScope() {
    console.log(this.toString());
    console.log(`this === window = ${(this === window).toString()}`);
}