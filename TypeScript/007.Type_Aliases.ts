// A type alias is a way to give a name to any type in TypeScript using the type keyword. Once defined, you can reuse the alias throughout your code, reducing duplication and improving clarity.

// Case 1
type MyType = string;
let userAlias: MyType = "Alice";
// userAlias = 42; // Error: Type 'number' is not assignable to type 'string'

// Case 2
type UserId = string;
type Score = number;
let id: UserId = "ABC123";
let points: Score = 95;

type Id = string | number;
let userId: Id = "XYZ789";
userId = 123; // OK
// userId = true; // Error: Type 'boolean' is not assignable to type 'Id'

type User7 = {
    id: Id;
    name: string;
    age?: number; // Optional property
};
let user: User7 = {
    id: "U001",
    name: "Bob",
    // age is optional, so it can be omitted
};
user = {
    id: 1001,
    name: "Alice",
    age: 25,
};
// user = { id: "U002" }; // Error: Property 'name' is missing

type Operation = (a: number, b: number) => number;
const add7: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
console.log(add7(5, 3)); // 8
console.log(subtract(5, 3)); // 2

type Status = "pending" | "active" | "inactive";
type Profile = {
  user: User7;
  status: Status;
  roles: string[];
};
let profile: Profile = {
  user: { id: "U003", name: "Charlie", age: 30 },
  status: "active",
  roles: ["admin", "editor"],
};

// Case 3
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;
let person: Person = {
  name: "Eve",
  age: 28,
};

// Case 4
type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}
move("up"); // OK
// move("diagonal"); // Error: Argument of type '"diagonal"' is not assignable to type 'Direction'