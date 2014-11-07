var CucumberWorld = require('../support/world').World;
var Steps = function () {
    var Given = When = Then = this.defineStep;
    this.World = CucumberWorld;
    Given(/^voctor on codefordream$/, function (callback) {
        this.spooky.thenOpen("http://www.codefordream.com")
        this.spooky.then(function () {
            this.thenClick("#switch-to-login", function () {
            })
        });
        callback();
    });
    When(/^Code for dream voctor login$/, function (callback) {
        this.spooky.then(function () {
            this.thenClick("#switch-to-login", function () {
            })
            this.fillSelectors("#login-form", {"input#login-user-name": "voctor", "input#login-pwd": "123456"})
            this.thenClick("#login-btn", function () {
                this.wait(3000, function () {
                    this.capture("login.png")
                })
            })
        });
        callback();
    });
    Then(/^Welcome,voctor$/, function (callback) {
        this.spooky.then(function () {
            phantom.casperTest = true;
            var casper = this;
            this.test.begin("login succeed", 1, function (test) {
                test.assertEqual("Welcome,voctor", casper.getHTML('b'));
                test.done();
            })
        });
        callback();
    });
};
module.exports = Steps;