// question 2 sort by lowest to highest price

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b)
}

let array = [5, 10, 0, -5]

console.log(sortLowToHigh(array))