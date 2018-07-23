/**
 * We need to specify the properties name and age
 */
class Cat {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, ${this.name}`;
    }

}

let cat = new Cat('pesho', 5);
let cat2: Cat = new Cat('pesho', 5);

/**
 * Another way to create class - public/private/protected modifiers should be specified, and all of them are now properties
 */
class Cat2 {

    constructor(
        public name: string,
        public age: number) { }

   private greet(): string {
        return `Hello, ${this.name}`;
    }

}
