var casper = require('casper').create();

casper.start('http://www.codefordream.com/', function() {
    this.echo("I am on codefordream");
});

casper.thenClick('#switch-to-login', function() {
    this.echo("click login_switch");
});

casper.then(function(){
    this.fillSelectors('#login-form',{
        'input#login-user-name':'xyooyy',
        'input#login-pwd':'31415926'
    },true)
    this.echo("input login info");
});

casper.thenClick('#login-btn',function(){
    this.wait(1000,function(){
        this.capture('login.png');
    })
    this.echo("login succeed");
});

casper.run();