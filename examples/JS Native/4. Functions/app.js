
// const x = 2;
// const y = x ** 2 + 2 * x + 5;

// console.log(`x=${x}`)
// console.log(`y=${y}`)

//*************** */

const x = 2;
let y = (x) => x ** 2 + 2 * x + 5;

function f(x) {
    return x ** 2 + 2 * x + 5;
}

console.log(`x=${x}`)
console.log(`y=${y}`)
console.log(`f(${x})=${f}`)

/***************/

const solveSquareEquation = (a, b, c) => {
    const delta = b**2 - 4 * a * c;

    if(delta < 0){
        return {
            x1: null,
            x2: null
        }
    }

    const x1 = (-b + Math.sqrt(delta)) / 2 * a;
    const x2 = (-b - Math.sqrt(delta)) / 2 * a;

    return {
        x1,
        x2
    }
}

console.log(solveSquareEquation(1, 1, 1))
console.log(solveSquareEquation(4, 2, 1))
console.log(solveSquareEquation(1, -2, 3))
console.log(solveSquareEquation(4, 4, 1))
console.log(solveSquareEquation(1, 5, -6))

