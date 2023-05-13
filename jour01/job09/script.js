const numbers = [5, 15, 4, 2, 9]
const order = ["asc", "desc"]

function tri(numbers, order) {
    if (order == "asc") {
        return numbers.sort(function(a, b){return a-b})
    }
    else if (order == "desc") {
        return numbers.sort(function(a, b){return b-a})
}
}

console.table(tri(numbers, "asc"))
console.table(tri(numbers, "desc"))