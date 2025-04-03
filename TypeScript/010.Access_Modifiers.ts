// Access modifiers in TypeScript control the visibility and accessibility of class members (properties, methods, and constructors). They enforce encapsulation, a core principle of object-oriented programming (OOP) that restricts direct access to an object’s internal data, promoting safer and more maintainable code.

class Device {
    constructor(
        public id: string,
        private powerConsumption: number,
        protected status: "on" | "off" = "off"
    ) { }

    public toggle(): void {
        this.status = this.status === "on" ? "off" : "on";
        console.log(`Device ${this.id} is ${this.status}`);
    }

    protected getPowerInfo(): string {
        return `Power: ${this.powerConsumption}W`;
    }
}

class SmartLight extends Device {
    constructor(id: string, powerConsumption: number, private brightness: number = 50) {
        super(id, powerConsumption);
    }

    public setBrightness(level: number): boolean {
        if (level >= 0 && level <= 100) {
            this.brightness = level;
            return true;
        }
        return false;
    }

    public getDetails(): string {
        return `SmartLight ${this.id}, ${this.getPowerInfo()}, Brightness: ${this.brightness}%, Status: ${this.status}`;
    }
}

const light = new SmartLight("L001", 10);
console.log(light.getDetails()); // SmartLight L001, Power: 10W, Brightness: 50%, Status: off
light.toggle(); // Device L001 is on
light.setBrightness(75);
console.log(light.getDetails()); // SmartLight L001, Power: 10W, Brightness: 75%, Status: on
// console.log(light.powerConsumption); // Error: Property 'powerConsumption' is private
// console.log(light.status); // Error: Property 'status' is protected