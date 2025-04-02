// Explicit type annotations are when you manually specify the type of a variable, parameter, or return value using TypeScript’s syntax (e.g., : string).
// Union types allow a variable to hold one of several types, defined using the | (pipe) operator. This is useful when a value could be multiple types, like a function that accepts a string or number.

// Define a user setting with explicit types
let username: string = "Bob";
let notifications: boolean | string = true; // Can be a boolean or a string like "email"
let theme: "light" | "dark" = "light"; // Literal union type (only these values allowed)

// Function to update notification preference
function updateNotifications(pref: boolean | string): string {
    if (typeof pref === "boolean") {
        return `Notifications ${pref ? "enabled" : "disabled"}`;
    }
    return `Notifications set to ${pref}`;
}

// Test the function
console.log(updateNotifications(true)); // Notifications enabled
console.log(updateNotifications("email")); // Notifications set to email
//-> console.log(updateNotifications(123)); // Error: Argument of type 'number' is not assignable

// Update settings
notifications = "sms";
theme = "dark";
console.log(updateNotifications(notifications)); // Notifications set to sms
console.log(`Theme: ${theme}`); // Theme: dark