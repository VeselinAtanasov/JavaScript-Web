let db = (function () {
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
    function get(key,callback) {
        if (typeof key !== 'string') {
            throw "The key parameter in get method should be a string";
        }
        if (!storage.hasOwnProperty(key)) {
            throw "The key parameter in get method is not resent in the db";
        }
        if(callback){
            callback(storage[key]);
        }else{
            return storage[key];
        }
        
    }
    function getAll(callback) {
        if (Object.keys(storage).length === 0) {
            throw "The DB is empty";
        }
        if(callback){
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
        storage={};
    }
    function save() {
        fs.writeFileSync('./storage.json', JSON.stringify(storage), 'utf8');
    }

    function load(callback) {
        try{
            storage =JSON.parse(fs.readFileSync('./storage.json'.JSON.stringify(storage),'utf8'));
        }catch(err){
            console.log('Error reading from file..');
        }
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