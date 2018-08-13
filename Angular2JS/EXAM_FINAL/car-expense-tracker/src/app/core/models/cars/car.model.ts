export class CarModel {
    constructor(
        public _id: string,
        public carName: string,
        public carDescription : string,
        public carBrand : string,
        public carModel : string,
        public initialInvestment: number,
        public carPicture: string,
        public createdBy: string,
        public dropboxData : Object
    ) { }
}