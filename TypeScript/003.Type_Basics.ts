let fruits = ["Apple"];
fruits.push("Banana");
// fruits.push(12); -> Error

let mixed_array = ["A", 5];
// mixed_array.push(true); -> Error 
mixed_array.push("B");
mixed_array.push(10);

function multiply(a:number, b:number) {
    return a * b;
}

// console.log(multiply('a', 2)); -> Error
console.log(multiply(4, 2));

let names = "Alice"; // TypeScript infers this as a string
// names = 42; // Error: Type 'number' is not assignable to type 'string'

let greeting: string = "Hello, TypeScript!";
greeting = "Hi!"; // OK
// greeting = 123; // Error: Type 'number' is not assignable to type 'string'

let isActive: boolean = true;
isActive = false; // OK
// isActive = "true"; // Error: Type 'string' is not assignable to type 'boolean'

let nothing: null = null;
let notAssigned: undefined = undefined;

let numbers: number[] = [1, 2, 3];
let names_array: Array<string> = ["Alice", "Bob"]; // Alternative syntax
// numbers.push("4"); // Error: Argument of type 'string' is not assignable to type 'number'

let user: [string, number] = ["Alice", 25];
user[0] = "Bob"; // OK
user[1] = 26; // OK
// user[2] = true; // Error: Property '2' does not exist on type '[string, number]'
// user[0] = 123; // Error: Type 'number' is not assignable to type 'string'

let anything: any = 42;
anything = "Hello"; // OK
anything = true; // OK

// Define a user profile
let username: string = "Alice";
let age: number = 25;
let isSubscribed: boolean = true;
let hobbies: string[] = ["reading", "coding"];
let contact: [string, number] = ["alice@example.com", 1234567890];
// Function to display user info
function displayUserInfo(name: string, age: number, isSubscribed: boolean): string {
  return `${name} is ${age} years old and ${isSubscribed ? "is" : "is not"} subscribed.`;
}
// Call the function
console.log(displayUserInfo(username, age, isSubscribed)); // Alice is 25 years old and is subscribed.
// Update hobbies
hobbies.push("gaming");
console.log(hobbies); // ["reading", "coding", "gaming"]
// Try an invalid operation
// hobbies.push(123); // Error: Argument of type 'number' is not assignable to type 'string'

let person = {
    name: "Durjoy",
    isOk: true,
};
// person.country = "Bangladesh"