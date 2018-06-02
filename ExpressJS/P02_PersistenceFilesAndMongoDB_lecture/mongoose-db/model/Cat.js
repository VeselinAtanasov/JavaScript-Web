const mongoose = require('mongoose');

//Describe the schema:
let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    color: { type: String }
});
//Attaching functionto a schema:
//Do not use arrow wunction here, because we will loose this...
catSchema.methods.sayHello = function () {
    return `Hello from ${this.name}...`;
};

//Attach virtual properties:
catSchema.virtual('description').get(function () {
    return `${this.name} -> ${this.age}`;
});

//Perform validation!!! :
catSchema.path('age').validate(function () {
    return this.age >= 1 && this.age <= 20;
}, 'Age must be between 1 and 20!');

//Defining the model
let Cat = mongoose.model('Cat', catSchema);
module.exports =Cat;