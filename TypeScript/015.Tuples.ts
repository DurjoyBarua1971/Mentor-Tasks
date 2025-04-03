// A tuple in TypeScript is an array-like structure with a fixed number of elements, where each element has a specific type, and the order of those types matters. Unlike regular arrays, which have a single type for all elements (e.g., string[]), tuples allow you to define a precise sequence of types (e.g., [string, number]).

// Case 1
let user: [string, number] = ["Alice", 25];
console.log(user[0]); // Alice (string)
console.log(user[1]); // 25 (number)
user = ["Bob", 30]; // OK
// user = [30, "Bob"]; // Error: Type 'number' is not assignable to type 'string' at position 0
// user = ["Charlie"]; // Error: Type '[string]' is not assignable to type '[string, number]'

// Case 2
let scores: [string, ...number[]] = ["Test", 90, 85, 95];
console.log(scores); // ["Test", 90, 85, 95]
scores = ["Quiz"]; // OK (minimum 1 element)
scores = ["Exam", 88]; // OK
// scores = [100, 90]; // Error: Type 'number' is not assignable to type 'string' at position 0

// Case 3
let tuple: [string, number] = ["Alice", 25];
let array: string[] = ["Alice", "Bob"];
array.push("Charlie"); // OK
tuple.push(30); // OK at runtime, but TypeScript warns: Property 'push' does not exist on type '[string, number]'

// Case 4
let tuplePerson: [string, number] = ["Alice", 25];
let objectPerson: { name: string; age: number } = { name: "Alice", age: 25 };
console.log(tuplePerson[0]); // Alice (positional)
console.log(objectPerson.name); // Alice (named)