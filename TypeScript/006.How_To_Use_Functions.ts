// Case 1
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3)); // 5
// console.log(add("2", "3")); // Error: Argument of type 'string' is not assignable to type 'number'

// Case 2
function logMessage(message: string): void {
    console.log(message);
}

// Case 3
const multiply: (x: number, y: number) => number = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

// Case 4
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi")); // Hi, Bob!

// Case 5
function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greetWithDefault("Charlie")); // Hello, Charlie!
console.log(greetWithDefault("Dave", "Hey")); // Hey, Dave!

// Case 6
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10)); // 10
console.log(sum()); // 0
// console.log(sum(1, "2")); // Error: Argument of type 'string' is not assignable to type 'number'

// Case 7 : Function Overloads
function formatInput(input: string): string;
function formatInput(input: number): string;
function formatInput(input: string | number): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}
console.log(formatInput("hello")); // HELLO
console.log(formatInput(42.567)); // 42.57
// console.log(formatInput(true)); // Error: No overload matches this call

// Case 8
function describeValue(value: string | number): string {
    if (typeof value === "string") {
        return `String: ${value.toUpperCase()}`;
    }
    return `Number: ${value.toFixed(2)}`;
}
console.log(describeValue("hello")); // String: HELLO
console.log(describeValue(42.567)); // Number: 42.57