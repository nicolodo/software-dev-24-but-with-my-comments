export function sum(a,b) {
    return Number(a) + Number(b)
}

export function multiply(a,b) {
    return a * b
}

export function findMaxValue(arr) {
    if (arr.length == 0) {
        return null
    }
    return Math.max(...arr)
}