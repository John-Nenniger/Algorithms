// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:

addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'


function addLetters(...letters) {
    if (letters.length == 0) {
        return 'z'
    }
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    let total_count = 0
    letters.forEach((letter) => {
        total_count += alphabet.indexOf(letter) + 1
    })

    while (total_count > 26) {
        total_count = total_count - 26
    }
    return alphabet[total_count - 1]
}