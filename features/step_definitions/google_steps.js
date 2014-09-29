var CucumberWorld = require('../support/world').World;
//var Browser = require("zombie");
//var assert = require("assert");

var googleSteps = function() {
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Codefordream$/, function(callback) {
    this.home_page.visit(callback);
//      callback();
  });

  When(/^Codefordream user login$/, function(query, callback) {
      this.home_page.show_login(callback);
      this.home_page.input_user_and_pwd(callback);
      this.home_page.press_login(callback);
  });

};

module.exports = googleSteps;
