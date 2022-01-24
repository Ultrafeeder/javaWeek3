function exercise(act) {
    return function () {
        return `Today's exercise is ${act}`
    }
}

let run = exercise('running');
let swim = exercise('swimming');

console.log(run());
console.log(swim())