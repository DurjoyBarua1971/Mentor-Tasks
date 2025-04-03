// An interface in TypeScript is a way to define the structure or shape of an object, function, or class. It acts as a contract, ensuring that any entity implementing the interface adheres to its specified properties, methods, or behavior. Interfaces are purely a compile-time construct—they don’t generate runtime code but provide type checking and IntelliSense support.

interface User12 {
    id: string;
    name: string;
}

const user12: User12 = {
    id: "U001",
    name: "Alice",
};

console.log(user.name); // Alice
//const invalidUser: User = { id: "U002" }; // Error: Property 'name' is missing

//--------------------------------------------------------------------------------

interface Product {
    id: string;
    name: string;
    price: number;
    inStock?: boolean; // Optional property
}

const laptop: Product = {
    id: "P001",
    name: "Laptop",
    price: 999.99,
    // inStock is optional, so it can be omitted
};

const book12: Product = {
    id: "P002",
    name: "Book",
    price: 19.99,
    inStock: true,
};

// const invalidProduct: Product = {
//     id: "P003",
//     name: "Pen",
// }; // Error: Property 'price' is missing

//---------------------------------------------------------------------------------

interface Identifiable {
    id: string;
}

interface Trackable {
    lastUpdated: number;
}

interface Asset extends Identifiable, Trackable {
    name: string;
}

const asset: Asset = {
    id: "A001",
    name: "Server",
    lastUpdated: Date.now(),
};

//---------------------------------------------------------------------------------
interface Vehicle {
    brand: string;
    start(): string;
    stop(): string;
}

class Car implements Vehicle {
    constructor(public brand: string) { }

    start(): string {
        return `${this.brand} engine started`;
    }

    stop(): string {
        return `${this.brand} engine stopped`;
    }
}

const car = new Car("Toyota");
console.log(car.start()); // Toyota engine started
console.log(car.stop()); // Toyota engine stopped