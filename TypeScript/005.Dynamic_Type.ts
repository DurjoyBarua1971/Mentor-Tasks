// In TypeScript, dynamic typing refers to scenarios where a variable’s type isn’t strictly defined, allowing it to hold values of any type at runtime. This is in contrast to TypeScript’s usual static typing, where types are checked at compile time. The primary tool for dynamic typing in TypeScript is the any type.

// Simulate an API response with unknown shape
function fetchData(): any {
    // Could return string, number, object, etc.
    return Math.random() > 0.5 ? { name: "Alice", age: 25 } : "Error: No data";
}

// Process the response
function processApiResponse(response: any) {
    console.log(response.name); // Risky: No error if name doesn't exist
}

// Safer version with unknown
function processSafeResponse(response: unknown) {
    if (typeof response === "object" && response !== null && "name" in response) {
        console.log((response as { name: string }).name.toUpperCase()); // Safe with assertion
    } else {
        console.log("Invalid response");
    }
}

// Test both approaches
let data = fetchData();
processApiResponse(data); // Might fail silently
processSafeResponse(data); // Forces type checking

// Even better: Define a type
interface User {
    name: string;
    age: number;
}

function processTypedResponse(response: unknown) {
    if (typeof response === "object" && response !== null && "name" in response) {
        let user = response as User; // Assert as User
        console.log(`User: ${user.name}, Age: ${user.age}`);
    } else {
        console.log("Expected a user object");
    }
}

processTypedResponse({ name: "Bob", age: 30 }); // User: Bob, Age: 30
processTypedResponse("Error"); // Expected a user object