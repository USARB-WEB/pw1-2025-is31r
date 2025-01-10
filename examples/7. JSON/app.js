const person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'travelling', 'coding'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

// Convert object to JSON
const personJSON = JSON.stringify(person);
console.log(person);
console.log(personJSON);

// Convert JSON to object
const personObj = JSON.parse(personJSON);
console.log(personObj);