
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced(well - formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.
const l = console.log


function matchingBrackets(string){
    // maybe an object would be a better storage vessel for these symbols?
    let mismatches = {'(': 0, ')': 0, '[': 0, ']': 0, '{': 0, '}': 0}
    let opposite = {'(': ')', ')': '(', '[': ']', ']':'[', '{': '}','}':'{'}

    string.split('').forEach((symbol) => {
        // if there is an existing match in mismatches:
        // - remove the existing match
        if(mismatches[opposite[symbol]] > 0){
            // l(mismatches[opposite[symbol]])
            mismatches[opposite[symbol]] -= 1
            // l(mismatches[opposite[symbol]])
        } else {
            // If there isn't an existsing match in mismatches:
            // - add the current element to the mismatches object 
            mismatches[symbol] += 1
        }
    })
    if(Object.values(mismatches).every((x) => x == 0)){
        return true
    }
    return false
    
}


l(matchingBrackets("([])[]({})"))
l(matchingBrackets("([)]"))
l(matchingBrackets("((()"))
