const l = console.log

function replicate(frequency, integer, arr = []){
    if (frequency < 1){
        return arr
    } else if (frequency){
        arr.push(integer)
        return replicate(frequency - 1, integer, arr)
    }
}


console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []