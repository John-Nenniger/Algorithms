const l = console.log


function palindrome(word){
    const leng = word.length
    const letters = word.split("")
    if(leng < 2){
        return true
    } else if (letters[0] === letters[leng-1]){
        return palindrome(word.slice(1, leng-1))
    } else {
        return false
    }
}


l(palindrome("visibule"))
l(palindrome("kayak"))