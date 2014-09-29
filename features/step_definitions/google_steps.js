var CucumberWorld = require('../support/world').World;
//var Browser = require("zombie");
//var assert = require("assert");

var googleSteps = function() {
  console.log("googleSteps");
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Codefordream$/, function(callback) {
    console.log("I am on Codefordream");
    this.home_page.visit(callback);
//      callback();
  });

  When(/^Codefordream user login$/, function(query, callback) {
      this.home_page.show_login(callback);
      this.home_page.input_user_and_pwd(callback);
      this.home_page.press_login(callback);
      this.home_page.login_succ();
  });
//
//    When(/^welcome,xyooyy$/, function(query, callback)
//    {
//    });

};

module.exports = googleSteps;
