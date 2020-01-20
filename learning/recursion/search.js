
// Write a
// function called contains that searches
// for a value in a nested object.It returns true
// if the object contains that value.

const l = console.log

function search(object, value){
    if(Object.values(object) && Object.values(object).includes(value)){
        return true
    } else {
        for(let key in object){
            if(typeof object[key] == "object"){
                return search(object[key], value)
            }
        }
    }
    return false
}


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = search(nestedObject, 44); // true
let doesntHaveIt = search(nestedObject, "foo"); // false


l(hasIt)
l(doesntHaveIt)
l(Object.values(nestedObject))