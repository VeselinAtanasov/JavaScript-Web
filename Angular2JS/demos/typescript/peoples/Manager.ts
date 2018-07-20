import Employee from './Employee';

class Manager extends Employee {

    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(` is scheduling meetings`);
        this.tasks.push(` is preparing quarterly meetings`);
    }

   protected getSalary() : number {
        return this.salary+ this.dividend;
    }
}

export default Manager;