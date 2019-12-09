const l = console.log


// version 
// 1.0
// 0.36


//Spec 
// negative
// specfic
// bound
// wildcard

// check("1.0", "1,-1.2", true)
function isNegative(version, negative) {
    let negative_number = negative.split("").slice(1, negative.length).join("")
    if (version === negative_number) {
        return true
    }
    return false
}

function isPositive(version, spec) {
    if (version === spec) {
        return true
    } else {
        return false
    }
}

function isBound(version, spec) {
    let negative_number, operator
    if (spec.split("").includes("=")) {
        operator = spec.split("").slice(0, 2).join("")
        negative_number = spec.split("").slice(2, spec.length).join("")
    } else {
        operator = spec.split("").slice(0, 1).join("")
        negative_number = spec.split("").slice(1, spec.length).join("")
    }

    return eval(`${version} ${operator} ${negative_number}`)

}


function versionIsWithinSpec(version, spec) {
    // split up the specs by comma
    const specs = spec.split(",")

    for (let constraint of specs) {
        let first_char = constraint.split("")[0]
        if (first_char === '-') {
            if (isNegative(version, constraint)) {
                return false
            }
        } else if (first_char === '>' || first_char === '<') {
            // run is bound
            isBound(constraint)
        } else if (constraint.split("").includes('x')) {
            // run wildcard
        } else {
            // run isPostive
        }

    }

}

l(isBound("1.0", "<=1.1"))

function check(version, spec, expected) {
    return versionIsWithinSpec(version, spec) === expected
}