
// write a recursive map function 

// seems like a good candiate for memoization

const l = console.log

function map(array, func){
    if (array.length == 1){
        return func(array[0])
    } else {
        return [func(array[0])].concat(map(array.splice(1), func))
    }
}


l(map([0,1,2,3,4,5,6,7,8,9,10], (x) => ( x * 2 )))

