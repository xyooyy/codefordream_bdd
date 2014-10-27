var CucumberWorld = require('../support/world').World;
var Steps = function () {
    var Given = When = Then = this.defineStep;
    this.World = CucumberWorld;
    Given(/^I am on codefordream$/, function (callback) {
        this.spooky.thenOpen("http://www.codefordream.com")
        this.spooky.then(function () {
            this.thenClick("#switch-to-login", function () {
                @callback
            })
        });
        callback();
    });
    When(/^Code for dream user login$/, function (callback) {
        this.spooky.then(function () {
            this.thenClick("#switch-to-login", function () {
                @callback
            })
            this.fillSelectors("#login-form", {"input#login-user-name": "xyooyy", "input#login-pwd": "31415926"})
            this.thenClick("#login-btn", function () {
                this.wait(1000, function () {
                    this.capture("login.png")
                })
            })
        });
        callback();
    });
    Then(/^Welcome,xyooyy$/, function (callback) {
        this.spooky.then(function () {
            phantom.casperTest = true;
            var casper = this;
            this.test.begin("login succeed", 1, function (test) {
                test.assertEqual("Welcome,xyooyy", casper.getHTML('b'));
                test.done();
            })
        });
        callback();
    });
};
module.exports = Steps;