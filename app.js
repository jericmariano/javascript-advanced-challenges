// question 1 show rating

function showRating(rating) {
    let string = ""

    for (let i = 0; i < Math.floor(rating); i++) {
        string += "*"
        if (i !== Math.floor(rating) - 1) {
            string += " "
        }
    }

    if (!Number.isInteger(rating)) {
        string += " ."
    }

    return string
}

console.log(showRating(3))