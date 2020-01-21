const l = console.log

/* Numbers:
 "10", a positive integer
 "-10", a negative integer
 "10.1", a positive real number
 "-10.1", a negative real number
 "1e5", a number in scientific notation
 */

 /* Non Numbers:
 "a"
"x 1"
"a -2"
"-"
 */

// so we have yes characters : [0,1,2,3,4,5,6,7,8,9]
// Maybe characters: ['-', 'e', '.']
// and everything else is a no character

// other rules: 
// two maybes can't be in a row, they have to have numbers in between.
// a maybe can't be at the end of the string, but it can be at the beginning

// but e and . can't be at the start...

// I think I can separate first and last logic with normal logic

const yes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const maybe = ['-', 'e', '.']

function isNumber(str){
    let characters = str.split("")
    if (characters[0] == 'e' || characters[0] == '.' || (characters[0] == '-' && characters.length === 1)){  
        return false
    }
    let previousMaybe = false
    for (character of characters){
        if(yes.includes(character)){
            previousMaybe = false
        } else if (maybe.includes(character) && previousMaybe){
            return false
        } else if (maybe.includes(character)){
            previousMaybe = true
        } else {
            return false
        }
    }
    return true
}

// l(yes.includes("a"))
// l(maybe.includes("a"))
// l(yes.includes("a"))
l(isNumber("10"))
l(isNumber("-10"))
l(isNumber("10.1"))
l(isNumber("-10.1"))
l(isNumber("1e5"))


l(isNumber("a"))
l(isNumber("x -1"))
l(isNumber("3.43a"))
l(isNumber("a -2"))
l(isNumber("-"))
l(isNumber("."))