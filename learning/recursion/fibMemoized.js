const l = console.log

let calls = 0

const memos = {}

function fibonacci(n){
    calls += 1
    if (memos[n]){
        return memos[n]
    } else if(n < 2){
        memos[n] = n
        return n
    } else {
        const result = fibonacci(n - 1) + fibonacci(n - 2)
        memos[n] = result
        return result
    }
}



l(fibonacci(5))
l(fibonacci(10))
l(fibonacci(7))
l(`we made ${calls} calls`)