import Melon from './Melon';

class Airmelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex(): number {
        return this._elementIndex;
    }
    toString() : string {
        return `Element: ${this.constructor.toString().match(/\w+/g)[1].split('melon')[0]}\n`+super.toString()+`Element Index: ${this.elementIndex}\n`
     }
}

export default Airmelon;