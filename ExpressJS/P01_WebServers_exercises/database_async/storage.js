let db = (function () {
    const fs = require('fs');
    const STORAGE_PATH = './package.json';
    let storage = {

    };

    function put(key, value) {
        if (typeof key !== 'string') {
            throw "The key parameter in put method should be a string";
        }
        if (storage.hasOwnProperty(key)) {
            throw "The key parameter in put method is already resent in the db";
        }
        storage[key] = value;
    }
    function get(key, callback) {
        if (typeof key !== 'string') {
            throw "The key parameter in get method should be a string";
        }
        if (!storage.hasOwnProperty(key)) {
            throw "The key parameter in get method is not resent in the db";
        }
        if (callback) {
            callback(storage[key]);
        } else {
            return storage[key];
        }

    }
    function getAll(callback) {
        if (Object.keys(storage).length === 0) {
            console.log("The DB is empty");
        }
        if (callback) {
            callback(storage);
            return;
        }
        return storage;

    }
    function update(key, newValue) {
        if (typeof key !== 'string') {
            throw "The key parameter in update method should be a string";
        }
        if (!storage.hasOwnProperty(key)) {
            throw "The key parameter in update method is not resent in the db";
        }
        storage[key] = newValue;
    }
    function remove(key) {
        if (typeof key !== 'string') {
            throw "The key parameter in update method should be a string";
        }
        if (!storage.hasOwnProperty(key)) {
            throw "The key parameter in update method is not resent in the db";
        }
        delete storage[key];
    }
    function clear() {
        storage = {};
    }
    function save(callback) {
        let json = JSON.stringify(storage);

        fs.writeFile(STORAGE_PATH, json, 'utf-8', function (err) {
            if (err) {
                console.log(err);

                return;
            }

            callback();
        });
    }

    function load(callback) {
        
        fs.readFile('./storage.json', (err, data) => {
            console.log("Try to load the data");
            if (err) {
                console.log(err);
                console.log("Try to load the data");
                return;
            }
            console.log("Data was save successfully!");
            storage = JSON.parse(data);
            console.log(storage);
            callback();
        });
    }

    return {
        put,
        get,
        getAll,
        update,
        delete: remove,
        clear,
        save,
        load
    };
})();

module.exports = db;