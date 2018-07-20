abstract class Employee {
    protected name: string
    protected age: number;
    public salary: number
    protected tasks: string[];

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
        this.salary=0;
        this.tasks=[];
    }

    work() : void {
        let currentTask : string = this.tasks.shift();
        console.log(`${this.name} ${currentTask}`);
        this.tasks.push(currentTask);

    }
  protected  getSalary() : number {
        return this.salary;
    }
    collectSalary() : void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }
}

export default Employee;
