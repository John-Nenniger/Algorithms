const l = console.log


const perfect = (n) => {
    let perfect_numbers = []
    for (let i = 19; n > perfect_numbers.length; i++){
        if(isPerfect(i)){
            perfect_numbers.push(i)
        }
    }
    return perfect_numbers[n - 1]
}



function isPerfect(num){
    return ((num + '').split('').reduce((accu, current) => ( parseInt(accu) + parseInt(current))) === 10 ? true : false)
}


l(perfect(3))
l(perfect(0))
l(perfect(1))
l(perfect(6))
l(perfect(90))