abstract class Melon {
    public weight: number;
    public melonSort: string

    constructor(weight: number, melonSort: string) {
        this.weight=weight;
        this.melonSort = melonSort;
    }

    toString() : string {
       return `Sort: ${this.melonSort}\n`
    }
}

export default Melon;