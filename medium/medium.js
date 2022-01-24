

var sharePizza = (noPeople) => {
    var cutPizzaSlices = (noSlice) => {
    return `Each person gets ${noSlice / noPeople} slices of pizza.`
    }
    return cutPizzaSlices(8)
}

console.log(sharePizza(2))