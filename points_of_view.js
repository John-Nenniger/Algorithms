// https://www.codewars.com/kata/change-your-points-of-view/train/javascript

const point = (a, b) => {
    return function () {
        return [a, b]
    }
};
const fst = (pt) => {
    return pt()[0]
};
const snd = (pt) => {
    return pt()[1]
};
const sqrDist = (pt1, pt2) => {
    let ex = Math.abs((pt1()[0] - pt2()[0]))
    let why = Math.abs((pt1()[1] - pt2()[1]))
    ex = ex ** 2
    why = why ** 2
    //   return [ex^2, why^2]
    let distance = ex + why
    return distance
};
const line = (pt1, pt2) => {
    let ex = (pt1()[0] - pt2()[0])
    let why = (pt1()[1] - pt2()[1])
    let slope = (why / ex)
    let b = (pt1()[1] - (slope * 22))

    return [slope * 3, 3, b * 3]
};