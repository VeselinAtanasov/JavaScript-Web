
import Airmelon from './Airmelon';
import Earthmelon from './Earthmelon';
import Firemelon from './Firemelon';
import Melolemonmelon from './Melolemonmelon';
import Watermelon from './Watermelon';

// let test : Melon = new Melon(100, "Test");
// //Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100


console.log('===========')
let melo : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(melo.toString());
melo.morph()
console.log(melo.toString());

