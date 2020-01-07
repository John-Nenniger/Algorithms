/* Given an 8-bit integer, swap the even and odd bits 

E.g. 10101010 => 01010101
*/
const l = console.log

// I could just interpret these 8-bit integers as strings and do it that way, 
// but i think that would be avoiding the spirit of the question

// new Uint8Array take length as a parameter, not an integer.
// so I still need a function that gets the bits from an integer

function eightBit(int){
    let stringification = int.toString(2)
    return ("00000000" + stringification).substr(-8)
}

l(eightBit(4))
l(eightBit(6))
l(eightBit(244))


function swapBits(int){
    let binaryArray = eightBit(int).split("")
    let swapped =  [binaryArray[1], binaryArray[0], binaryArray[3], binaryArray[2], binaryArray[5], binaryArray[4], binaryArray[6], binaryArray[7]].join("")
    return parseInt(swapped, 2)
}


l(swapBits(4))
l(swapBits(6))
l(swapBits(244))