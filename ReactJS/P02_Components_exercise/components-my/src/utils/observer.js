let functionKeeper = {};

let observer = {
    addObserver: (name, func) => {
        functionKeeper[name] = func;
    },
    executeObserver: (name,params) =>{
        functionKeeper[name](params);
    }
};

export default observer;