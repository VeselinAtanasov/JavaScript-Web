import Watermelon from './Watermelon';

class Melolemonmelon extends Watermelon {
    elements : string[];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
    }
    morph() {
        let current = this.elements.shift();
        this.elements.push(current);
    }

    toString() {
        let result = "";
        result += `Element: ${this.elements[0]}\n`;
        result += `Sort: ${this.melonSort}\n`;
        result += `Element Index: ${this.elementIndex}\n`
        return result.trim();
    }
}

export default Melolemonmelon
