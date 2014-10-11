var Promise = require('promise');

function first_step(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('first')
            resolve('I am promise head')
        },5000)
    })
}


first_step().then(function(message){
    console.log('second');
    console.log(message);
});