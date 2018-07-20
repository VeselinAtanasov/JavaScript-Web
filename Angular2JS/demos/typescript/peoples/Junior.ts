
import Employee from './Employee';

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(` is working on a simple task`)
    }
}

export default Junior;