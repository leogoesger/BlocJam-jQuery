HTMLCollection.prototype.forEachNew = function(func){
    for (var i = 0; i < this.length; i++){
        func(this[i]);
    }
}

function forEach(array, callback){
    for (var i = 0; i < array.length; i++){
        callback(array[i]);
    }
}