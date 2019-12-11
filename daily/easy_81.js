/* Given a mapping of digits to letters (as in a phone number), and a digit string,

return all possible letters the number could represent.

You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} 

then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"]  */

const l = console.log

function possibleWords(mappingObject, digitString){
    let results = [];
    let digits = digitString.split("")
    const digitsLength = digits.length
    for(let i = 0; i < digitsLength;i++){
        let possibilities = mappingObject[digits[i]]
        possibilities.forEach((possibility) => {
            for(let j = i + 1; j < digitsLength; j++){
                let nextDigit = digits[j]
                let nextPossibilities = mappingObject[nextDigit]
                for(let x = 0; x < nextPossibilities.length; x ++){
                    results.push(possibility + nextPossibilities[x])
                }
            }

        })

    }
    return results

}



l(possibleWords({ "2": ["a", "b", "c"], "3": ["d", "e", "f"]}, "23"))

l(possibleWords({ "2": ["f", "e", "j"], "3": [ "e", "f"]}, "23"))