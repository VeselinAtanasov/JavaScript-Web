/**
 * Dependency Injection :
 * Instead of creating instance of Engine in the class Car we are passing the engine from outside via the constructor
 * This helps us to use different engines for different instance of the Car class:
 */

class Engine {
    constructor(
        public model: string,
        public type: string
    ) {

    }
}

class Car {
    constructor(
        public make: string,
        public model: string,
        private engine: Engine
    ) { }
}

let mz = new Car('Mercedes', 's500', new Engine('w12', 'gasoline'));
let audi = new Car('Audi', 's8', new Engine('w2', 'diesel'))