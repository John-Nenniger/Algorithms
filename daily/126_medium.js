// write a function which rotates an array

// Do so without creating a new array

const l = console.log

function rotate(array, k){
    if (k === 0){
        return array
    } else {
        return rotate([...array.splice(1), array[0]], k-1)
    }
}



l(rotate([0,1,2,3,4], 2))