let db = (() => {
    const fs = require('fs');
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
    function get(key) {
        if (typeof key !== 'string') {
            throw "The key parameter in get method should be a string";
        }
        if (!storage.hasOwnProperty(key)) {
            throw "The key parameter in get method is not resent in the db";
        }
        return storage[key];
    }
    function getAll() {
        if (Object.keys(storage).length === 0) {
            throw "The DB is empty";
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
        storage={};
    }
    function save() {
        fs.writeFileSync('./storage.json', JSON.stringify(storage), 'utf8');
    }

    function load() {
        try{
            storage =JSON.parse(fs.readFileSync('./storage.json'.JSON.stringify(storage),'utf8'))
        }catch(err){
            console.log('Error reading from file..');
        }
        
        // fs.readFileSync('./storage.json',JSON.parse( fs.writeFileSync('storage.json', JSON.stringify(db))), 'utf8');
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