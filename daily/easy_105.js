// Given a function f, and N return a debounced f of N milliseconds.
// That is, as long as the debounced f continues to be invoked,
// f itself will not be called for N milliseconds.


function debounce(f, n){
    setTimeout(() => {
        f()
    }, n)
}

function add(a, b){
    console.log("add called")
    return a + b
}


debounce(add, 5000)