var CucumberWorld = require('../support/world').World;
//var Browser = require("zombie");
//var assert = require("assert");

var googleSteps = function() {
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Google$/, function(callback) {
    console.log("I am on Google");
//      var browser = Browser.create({debug:true});
//      browser.visit(
//          "http://www.codefordream.com/",
//          function(err) {
//              assert.ok(browser.success);
//
//              callback();
//          }
//      );
      this.home_page.visit(callback);
//      callback();
  });

  When(/^I search for "(.*)"$/, function(query, callback) {
      console.log("I search for " + query);
      callback();
  });

  Then(/^I see a link to "(.*)"$/, function(url, callback) {
    console.log("I see a link to " + url);
      callback();
  });
};

module.exports = googleSteps;
