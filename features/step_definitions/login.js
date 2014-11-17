var stepDefs = function(){
    this.World = require("../support/world.js").World;

    this.When(/^I am on codefordream$/,function(callback){
        this.visit("http://www.codefordream.com");
        callback()
    });
    this.Given(/^login with xyooyy$/,function(callback){
        var browser = this.browser;
            browser.click('#switch-to-login')
                   .execute(function(){
                    document.getElementById('login-user-name').value = 'xyooyy';
                    document.getElementById('login-pwd').value = '31415926';
                })
                   .click('#login-btn');
        callback();
    })
    this.Then(/^Welcome xyooyy$/,function(callback){
        var assert= this.assert;
            this.browser.pause('1000')
                        .getText('b',function(err,text){
                            assert.equal(text[0],'Welcome,xyooyy');
                            console.log('Login Succeed');
                            callback();
                        });

    })
}
module.exports = stepDefs;