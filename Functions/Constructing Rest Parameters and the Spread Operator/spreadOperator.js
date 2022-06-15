function display(char1, char2, char3, char4, ...others) {
    console.log(char1, char2, char3, char4);
    console.log(others);
}

let letters = 'abcdefg';
display(...letters);