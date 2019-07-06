// https://www.codewars.com/kata/bouncing-balls/train/javascript

function bouncingBall(h, bounce, window, count = -1) {
    // your code here
    if ((bounce >= 1) || (bounce <= 0) || (window >= h) || (h <= 0)) {
        return count
    }
    return bouncingBall(h * bounce, bounce, window, count + 2)
}