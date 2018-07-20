import Senior from './Senior';
import Junior from './Junior';
import Manager from './Manager';

let junior = new Junior("Ivan", 19);
junior.salary = 1200.00;
junior.work();
junior.collectSalary();
console.log('========================')
let senior = new Senior("Petko", 33);
senior.salary = 3200.00;
senior.work();
senior.work();
senior.work();
senior.collectSalary();

console.log('========================')

let manager = new Manager("Pesho", 36);
manager.salary = 6200.00;
manager.work();
manager.work();
manager.work();
manager.collectSalary();

// junior.work();
// senior.work();
// manager.work()