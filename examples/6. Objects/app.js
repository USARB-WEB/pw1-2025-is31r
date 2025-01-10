// const person = [
//     "Ion", 
//     "Creanga",
//     1837,
//     "Romanian"
// ];

// console.log(person);
// person[1] = "Eminescu";
// console.log(person);


const person = {
    id: 1,
    firstName: "Ion",
    lastName: "Creanga",
    year: 1837,
};

console.log(person);

person.lastName = "Eminescu";

console.log(person);

const persons = [
    {
        id: 1,
        firstName: "Ion",
        lastName: "Creanga",
        year: 1837,
    },
    {
        id: 2,
        firstName: "Mihai",
        lastName: "Eminescu",
        year: 1850,
    },
    {
        id: 3,
        firstName: "George",
        lastName: "Enescu",
        year: 1881,
    }
];

persons[1].lastName = "Eminescuuuuuu";
console.log(persons);