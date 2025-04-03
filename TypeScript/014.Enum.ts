// An enum (short for enumeration) in TypeScript is a way to define a set of named constants, each associated with a value (typically a number or string). Enums provide a type-safe way to represent a fixed set of related values, making your code more readable and less error-prone by replacing magic numbers or strings with meaningful names.

// Case 1
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
function move(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "Moving up";
        case Direction.Down:
            return "Moving down";
        case Direction.Left:
            return "Moving left";
        case Direction.Right:
            return "Moving right";
        default:
            return "Unknown direction";
    }
}
console.log(move(Direction.Up)); // Moving up
console.log(move(Direction.Left)); // Moving left
// console.log(move(999)); // Error: Argument of type '999' is not assignable to type 'Direction'

// Case 2
enum Status {
    Pending, // 0
    Active,  // 1
    Inactive, // 2
}
const taskStatus: Status = Status.Active;
console.log(taskStatus); // 1
console.log(Status.Pending); // 0
// Explicit values
enum ErrorCode {
    NotFound = 404,
    ServerError = 500,
}
console.log(ErrorCode.NotFound); // 404
