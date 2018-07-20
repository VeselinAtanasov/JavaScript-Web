import Employee from './Employee';

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(` is working on a complicated task`);
        this.tasks.push(` is taking time off work`);
        this.tasks.push(` is supervising junior's workers`);
    }
}

export default Senior;