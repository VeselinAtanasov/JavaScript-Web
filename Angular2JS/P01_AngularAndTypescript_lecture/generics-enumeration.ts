
/**
 * 
 * @param T Generic means taht could be from any type
 */
function calc <T>( args : T){
    console.log(args)
}

calc<number>(11);
calc<string>('Veselin');

class List<T>{
    add(value: T){
        console.log(value);
    }
}

let numbers = new List<number>();

numbers.add(11);

enum Color{
    Black, Red,Green
}

let color = Color.Black;
if(color === Color.Black){
    console.log(Color.Black)
}

let someValue : Color;
someValue = Color.Black;
