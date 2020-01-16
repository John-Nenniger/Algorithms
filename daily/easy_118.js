
// Return the square of each numbers sorted
// given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
const l = console.log


function squareSorted(arr){
    let returnable = []
    let negative_squares = []
    for (let int of arr){
        if(int < 0){
            negative_squares.push(int**2)
        } else if (int >= 0){
            returnable.push(int**2)
        }
    }
    const negatives_leng = negative_squares.length
    let maintainable_index = returnable.length - 1
    for (let i = 0; i < negatives_leng; i++){
        j = maintainable_index
        while(j >= 0){
            if (returnable[j] < negative_squares[i]){
                returnable.splice(j + 1, 0, negative_squares[i])
                maintainable_index = j + 1
                j = -1
                break
            }
            j = j - 1
        }
    }
    return returnable
}



l(squareSorted([-10,-9, -2, 0, 2, 3, 4, 5, 6]))


