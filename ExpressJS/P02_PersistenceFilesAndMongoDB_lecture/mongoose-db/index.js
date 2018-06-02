
const mongoose = require('mongoose');
const connection = 'mongodb://localhost:27017/cats';

//import exported shecma:
const Student = require('./model/Student.js');
const Cat = require('./model/Cat.js');
const Owner = require('./model/Owner.js');


mongoose
    .connect(connection)
    .then(() => {

        //creating cats:

        // let newCat = new Cat({
        //     name: "Vesko22",
        //     age: 4
        // });
        // newCat
        //     .save().catch(err => console.log(err));
        // Cat.find({}).then(cats => console.log(cats));

        // //creating owner
        Cat.find({}).then(cats => {
            let owner = new Owner({
                name: "Tom22",
                age: 33,
                cats
            });
            owner.save().catch(err => console.log(err));
        });

        Cat.findOne().then(cat => {
            console.log(cat.sayHello());
            console.log(cat.description);
        });

    });