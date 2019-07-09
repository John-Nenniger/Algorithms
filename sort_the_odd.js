// https://www.codewars.com/kata/sort-the-odd/train/javascript
// almost works:

function sortArray(array) {
    // Return a sorted array.
    let returnable_array = array.slice(0)
    if (array.length == 0) {
        return array
    }
    let len = array.length
    for (let i = 0; i < len; i++) {
        if (returnable_array[i] % 2 == 0) { continue; }
        for (let j = i + 1; j < len; j++) {
            if (returnable_array[j] % 2 == 0) { continue; }
            if (returnable_array[i] > returnable_array[j]) {
                let value_j = returnable_array[j]
                let value_i = returnable_array[i]
                returnable_array[j] = value_i
                returnable_array[i] = value_j
                break;
            } else if (j <= i) {
                break;
            } else {
                console.log("ERROR")
            }
        }
    }
    return returnable_array
}
// need to do it recursively I think

function sortArray(array){
    let new_arr = array.slice(0)
    if (array.length == 0) {
        return array
    }
    let len = array.length

}

