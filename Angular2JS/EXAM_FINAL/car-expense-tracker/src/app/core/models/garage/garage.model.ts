import { CarModel } from "../cars/car.model";

export class GarageModel {
    constructor(
        public id: string,
        public garageName: string,
        public garageDescription : string,
        public isPublic : boolean,
        public createdBy: string,
        public cars : Array<string>
    ) { }
}