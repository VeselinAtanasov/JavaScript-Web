const mongoose = require('mongoose');
const Student = require('./model/Student.js');
const connection = 'mongodb://localhost:27017/students';

let student = new Student({
    name: "Veselin",
    age: "30"
});

mongoose
    .connect(connection)
    .then((data) => {
        let student = new Student({
            name: "Vladislav",
            age: "30"
        });
        //  student.save();

        Student.find({}).then(students => {
            for (let student of students) {
                console.log(student._id);
                Student.findByIdAndUpdate(student._id.toString(), { $set: { age: 44 } })
                    .then(data => console.log(data))
                    .catch(data => console.log(data));
            }
            // Student.find({}).then(std => console.log(std))
        });

        student.save();
        Student.find({});
        Student.findOne();
        Student.findById(id).then(std => {
            std.name = 'Stamat';
            std.save();
        });
        Student.findByIdAndUpdate(id, { $set: { prop: newValue } }).then()

        Student.remove({ name: "Stamat" });
        Student.count();

        //Mongoose query:
        Student.find({})
            .where('age').gt(7).lt(14) //find all students with age larger 7 and less 14
            .where('name').equals('Stamat')
            .sort('name')
            .sort('-name') // sort in reverse order
            .select('name color') // returns   the name and clor
            .limit(10) // or .skip(1)
            .then();
    });