try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}

var spooky = new Spooky({
    child: {
        transport: 'http'
    },
    casper: {
        logLevel: 'debug',
        verbose: true
    }
}, function (err) {
    if (err) {
        e = new Error('Failed to initialize SpookyJS');
        e.details = err;
        throw e;
    }

    spooky.start('http://www.codefordream.com');
    spooky.then(function () {
        this.emit('hello', 'I am on code-for-dream');
        this.thenClick('#switch-to-login',function(){
            this.emit('hello','click login_switch');
        });
        this.then(function(){
            this.fillSelectors('#login-form',{
                'input#login-user-name':'xyooyy',
                'input#login-pwd':'31415926'
            },true);
            this.emit('hello','input login info');
        });
        this.thenClick('#login-btn',function(){
            this.emit('hello','login succeed');
            this.wait(1000,function(){
                this.capture('login.png');
            });
        });
    });
    spooky.run();
});

spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});

/*
 // Uncomment this block to see all of the things Casper has to say.
 // There are a lot.
 // He has opinions.
 spooky.on('console', function (line) {
 console.log(line);
 });
 */

spooky.on('hello', function (greeting) {
    console.log(greeting);
});

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});