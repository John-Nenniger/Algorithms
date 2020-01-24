const l = console.log
// ['a', 'b', 'c']
// k = 3

const possibilities = []


function allStringPossibilities(array, k, prefix = ''){
    if (k < 1){
        possibilities.push(prefix)
    } else {
        for (letter of array){
            allStringPossibilities(array, k-1, prefix + letter)
        }
    }
}


l(allStringPossibilities(['a', 'b', 'c', 'd'], 1))
l(possibilities)