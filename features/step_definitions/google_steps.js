var CucumberWorld = require('../support/world').World;
//var Browser = require("zombie");
//var assert = require("assert");

var googleSteps = function() {
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Codefordream$/, function(callback) {
    console.log("I am on Codefordream");
    this.home_page.visit(callback);
    callback();
  });

//  When(/^Code for dream user login$/, function(query, callback) {
//
//      callback();
//  });
};
//      this.home_page.show_login( function(error){
//          if(error)
//          {
//              console.log("show_login "+error);
//          }
//      });
//      this.home_page.wait(setTimeout(1000),function(query,callback) {
//          this.home_page.input_user_and_pwd(query, callback);
//          this.home_page.press_login(query, callback);
//          this.home_page.login_succ(query, callback);
//      });


//
//    When(/^welcome,xyooyy$/, function(query, callback)
//    {
//    });

module.exports = googleSteps;
