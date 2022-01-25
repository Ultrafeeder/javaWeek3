

function cutPizzaSlices(noSlice) {
    return function (noPeople) {
        return `Everybody gets ${noSlice / noPeople} slices of pizza.`
    }
}

let sharePizza = cutPizzaSlices(8);

console.log(sharePizza(4))