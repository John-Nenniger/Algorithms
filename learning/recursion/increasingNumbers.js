const l = console.log

function increasing(digits, current = '1'){
    if (addZeros(current, digits).split("").every(isNine)) {
        return current
    } else {
        return [addZeros(current, digits)].concat(increasing(digits, increment(current)))
    }
}


function increment(stringNum){ // e.g. '1'
    return (parseInt(stringNum, 10) + 1) + ''
}

function isNine(x) {
    return x === '9'
}

function addZeros(stringNum, digits){
    if (stringNum.length == digits){
        return stringNum
    } else {
        return addZeros('0' + stringNum, digits)
    }
}


l(increasing(3))


