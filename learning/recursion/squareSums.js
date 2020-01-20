// const l = console.log



function sumSquares(arr){
    if(arr.length == 1 && Number.isInteger(arr[0])){
        return arr[0]**2
    } else if (arr.length == 1 && Array.isArray(arr[0])) {
        return sumSquares(arr[0])
    } else if(Array.isArray(arr[0])){
        return sumSquares(arr[0]) + sumSquares(arr.slice(1))
    } else if (Number.isInteger(arr[0])){
        return arr[0] ** 2 + sumSquares(arr.slice(1))
    } else{
        throw "got to the else statement"
    }
}

var l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400