// Case 1: Map
const arr = [5, 1, 3, 2, 6];
// Task 1: Double the array element: [10, 2, 6, 4, 12]
function double(x) {
    return x * 2;
}
const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Task 2: Triple the array element
// Transformation logic
function triple(x) {
    return x * 3;
}
const tripleArr = arr.map(triple);
console.log(tripleArr); // [15, 3, 9, 6, 18]

// Task 3: Convert array elements to binary
// The above code can be rewritten as :
const binaryArr = arr.map(function binary(x) {
    return x.toString(2);
});

console.log(binaryArr); // [101, 1, 11, 10, 110]

// Case 2: Filter
const oddArr = arr.filter((x) => x % 2);
console.log(oddArr); // [5, 1, 3]
const evenArr = arr.filter((x) => x % 2 === 0);
console.log(evenArr); // [2, 6]

// Case 3: Reduce
const array = [5, 1, 3, 2, 6];
// Calculate sum of elements of array - Non functional programming way
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(array)); // 17

// Calculate sum of elements of array - Using reduce
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 17

// Case 4: Chaining
// First name of all people whose age is less than 30
const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// function chaining
const output = users
    .filter((user) => user.age < 30)
    .map((user) => user.firstName);
console.log(output); // ["Alok", "Ashish", "Ankit"]