// #
// Find the missing letter

// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one
// case.

// Example:

//     ['a', 'b', 'c', 'd', 'f'] - > 'e' ['O', 'Q', 'R', 'S'] - > 'P'
//     (Use the English alphabet with 26 letters!)


function findMissingLetter(array) {
    //   if(array[0].toLowerCase() == array[0]){
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    if (array[0].toUpperCase() == array[0]) {
        alphabet = alphabet.map((letter) => letter.toUpperCase())
    }
    const starting_index = alphabet.indexOf(array[0])
    const leng = array.length
    for (let i = 0; i <= leng; i++) {
        if (array[i] != alphabet[starting_index + i]) {
            return alphabet[starting_index + i]
        }
    }