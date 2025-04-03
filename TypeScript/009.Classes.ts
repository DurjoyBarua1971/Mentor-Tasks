// A class in TypeScript (and JavaScript) is a blueprint for creating objects with shared properties and methods. TypeScript enhances JavaScript classes by adding type annotations, access control, and other features to ensure type safety and better tooling support.

// Case 1
class User {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    greet(): string {
        return `Hello, ${this.name}!`;
    }
}
const user = new User("U001", "Alice");
console.log(user.greet()); // Hello, Alice!
console.log(user.id); // U001

// Case 2
class Account {
    public id: string;
    private balance: number;
    protected owner: string;

    constructor(id: string, balance: number, owner: string) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    private getBalance(): number {
        return this.balance;
    }

    public checkBalance(): string {
        return `${this.owner} has $${this.getBalance()}`;
    }
}

const account = new Account("A001", 1000, "Bob");
console.log(account.id); // A001
console.log(account.checkBalance()); // Bob has $1000
// console.log(account.balance); // Error: Property 'balance' is private
account.deposit(500);
console.log(account.checkBalance()); // Bob has $1500
// account.getBalance(); // Error: Property 'getBalance' is private

// Case 3
class Book {
    readonly isbn: string;
    title: string;

    constructor(isbn: string, title: string) {
        this.isbn = isbn;
        this.title = title;
    }
}

const book = new Book("123-456", "TypeScript Guide");
console.log(book.isbn); // 123-456
// book.isbn = "789-012"; // Error: Cannot assign to 'isbn' because it is a read-only property
book.title = "Advanced TypeScript"; // OK

// Case 4
class Person {
    constructor(protected name: string) { }
    getName(): string {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name: string, private salary: number) {
        super(name); // Call the parent constructor
    }
    getDetails(): string {
        return `${this.name} earns $${this.salary}`;
    }
}
const employee = new Employee("Charlie", 50000);
console.log(employee.getDetails()); // Charlie earns $50000
console.log(employee.getName()); // Charlie
// console.log(employee.name); // Error: Property 'name' is protected

// Case 5
abstract class Shape {
    constructor(protected color: string) { }
    abstract calculateArea(): number; // Subclasses must implement this
    describe(): string {
        return `A ${this.color} shape with area ${this.calculateArea()}`;
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle("blue", 5);
console.log(circle.describe()); // A blue shape with area 78.53981633974483
// const shape = new Shape("red"); // Error: Cannot create an instance of an abstract class