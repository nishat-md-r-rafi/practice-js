function callback(name){
    console.log(`hello ${name}`);
}

function higherOrder(callback){
    callback("rafi")
}

higherOrder(callback)