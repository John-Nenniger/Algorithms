const l = console.log

function findChildren(dancingBrigade) {
    const alphabet = 'abcdefghijklmnop'.split("")
    let sorted = dancingBrigade.split("").map((letter) => letter.toLowerCase()).sort()
    const sorted_length = sorted.length

    sorted[0] = sorted[0].toUpperCase()
    for (let i = 1; i < sorted_length; i++) {
        if (sorted[i] !== sorted[i - 1].toLowerCase()) {
            sorted[i] = sorted[i].toUpperCase()
        }
    }

    return sorted.join("")
};