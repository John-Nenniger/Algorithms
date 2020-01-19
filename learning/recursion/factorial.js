const l = console.log

function factorial(n){
    if(n == 0){
        return 1
    } else if (n < 0){
        throw "variable n must be > 0"
    } else {
        return n * factorial(n-1)
    }
}

l(factorial(4))
l(factorial(6))

