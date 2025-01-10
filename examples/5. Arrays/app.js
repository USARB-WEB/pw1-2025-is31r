// const a1 = 4;
// const a2 = 8;
// const a3 = -2;
// const a4 = 3;
// const a5 = 0;
// const a6 = 1;
// const a7 = 14;

// const sum = a1 + a2 + a3 + a4 + a5 + a6 + a7;

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const square = (n) => n ** 2;

// console.log(numbers.map((n) => square(n)))

/****************** Examples */

// # Reduce
const marks = [10, 9, 7, 10, 9];
let marksSum = 0;
for (let i = 0; i < marks.length; i++) {
    marksSum += marks[i];
}

console.log(`Average: ${marksSum / marks.length}`);
console.log('Average: ' + marks.reduce((accumulator, mark) => accumulator + mark, 0) / marks.length);


const dailyTempertures = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
for (let i = 0; i < dailyTempertures.length; i++) {
    if (dailyTempertures[i] > 25) {
        console.log(`Day ${i + 1} is hot`);
    }
}

dailyTempertures.forEach((temp, i) => {
    if (temp > 25) {
        console.log(`Day ${i + 1} is hot`);
    }
});

// # Filter

const hotDays = dailyTempertures.filter((temp) => temp > 25);
console.log(hotDays);


// # Map
const square = (n) => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = square(numbers[i]);
}
console.log(numbers);

console.log(numbers.map((n) => square(n)));






/* Off top*/
// console.log(typeof numbers)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(0 == null)
// console.log(0 === null)
// console.log(0 >= null)
// console.log(0 <= null)
// console.log(0 != null)
// console.log(0 !== null)
// console.log(0 >= undefined)
// console.log(0 <= undefined)