/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:



*/
const l = console.log

let uniqueInOrder = function(iterable) {
    if (!Array.isArray(iterable)) {
        iterable = iterable.split("")
    }
    let returnable = [iterable[0]]
    let iterable_length = iterable.length 
    for (let i = 0; i < iterable_length; i++){
        if (iterable[i] !== iterable[i + 1] && (iterable[i+1])){
            returnable.push(iterable[i+1])
        }
    }
    return returnable
}

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]