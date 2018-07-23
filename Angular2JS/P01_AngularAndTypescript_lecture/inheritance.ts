class Animal{
    constructor(public name:string){

    }
    move(meters: number) : void{
        console.log(`The Animal ${this.name} has moved with ${meters}`)
    }
}
/**
 * void means that will not return anything
 */
class Cats extends Animal{

    mew() : void{
        console.log('Mew.....')
    }
}

let cats = new Cats ('Veselin')
cats.mew();
cats.move(2);