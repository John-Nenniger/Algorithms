const l = console.log


function power(x, n){
    if(n === 0){
        return 1
    } else {
        return x * power(x, n-1)
    }

}



l(power(5, 5), 5**5)
l(power(2, 10), 2**10)