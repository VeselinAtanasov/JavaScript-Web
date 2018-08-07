

export class Furniture {
    constructor(
        public id: string,
        public make: string,
        public model: string,
        public year: number,
        public description: string,
        public image: string,
        public price: number,
        public material?: string) {

    }
}