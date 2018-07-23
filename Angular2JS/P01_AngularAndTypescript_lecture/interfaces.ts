interface IPerson {
    name:string;
    age: number;
}

function solve(person: IPerson){
    console.log(person.name);
}

class Human implements IPerson{
    name:string;
    age: number
}

solve({
    name:'Ivan',
    age: 11
})

solve(new Human())