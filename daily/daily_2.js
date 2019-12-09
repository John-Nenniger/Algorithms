// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers,
//     return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example,
// if our input was[1, 2, 3, 4, 5], the expected output would be[120, 60, 40, 30, 24].If our input was[3, 2, 1], the expected output would be[2, 3, 6].
const l = console.log


function arrayProduct(array){
    let returnable_array = [];
    const total = array.reduce((a, b) => a * b, 1)
    l(total)
    array.forEach((int) => {
        returnable_array.push(total/int)
    })
    return returnable_array
}

l(arrayProduct([1, 2, 2, 3, 4, 5]))

l(arrayProduct([3, 2, 1]))

// Follow - up: what
// if you can 't use division?



// [2, 2, 3, 4, 5]

// [120, 120, 80, 60, 48]

// does caching help me much?
// it helps when there's duplicates
//  2: 120
 
// it helps when one number in the array is a multiple of another (except in the case of 1)
// so if I know that the result of 2: 120, then i know 4 is half that.

// Oh but that's using division still



// we can cache the total of some chunk of the array.  Let's try half to start with 

daily([1, 2, 2, 3, 4, 5]) // [240, 120, 120, 80, 60, 48]


function daily(arr) {
    const arr_length = arr.length
    let results = []
    let first_half = arr[0..arr_length/2].reduce((a, b) => a * b, 1)
    let second_half = arr[arr_length/2..arr_length].reduce((a, b) => a * b, 1)

    for (let i = 0; i < arr_length / 2; i++){
        
    }

    for (let i = arr_length; i > arr_length / 2; i--) {

    }
}