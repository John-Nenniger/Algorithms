const l = console.log


function all(arr, func){
    if(arr.length === 1 && func(arr[0])){
        return true
    }
    else if(func(arr[0])){
        return all(arr.slice(1), func)
    }
    return false
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7;
});

console.log(allAreLessThanSeven); // false

