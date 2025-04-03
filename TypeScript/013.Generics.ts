// Generics in TypeScript allow you to create components (functions, classes, or interfaces) that work with a variety of types while preserving type safety. Instead of locking a component to a specific type (e.g., string or number) or using any (which sacrifices safety), generics let you define a type parameter that acts as a placeholder for the actual type, determined when the component is used.

// Case 1
function identity<T>(value: T): T {
    return value;
}

const strResult = identity<string>("Hello"); // strResult is string
console.log(strResult.toUpperCase()); // HELLO
const numResult = identity<number>(42); // numResult is number
console.log(numResult.toFixed(2)); // 42.00

// Case 2
const result = identity("Hello"); // result is inferred as string

// Case 3
function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}
const result1 = swap<string, number>("Hello", 42); // [number, string]
console.log(result1); // [42, "Hello"]
const result2 = swap<boolean, Date>(true, new Date()); // [Date, boolean]
console.log(result2); // [Date, true]

//-> Constraining Generics
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
//console.log(getLength(42)); // Error: Argument of type 'number' does not have 'length'