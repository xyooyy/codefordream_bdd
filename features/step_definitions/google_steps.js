var CucumberWorld = require('../support/world').World;
var assert = require("assert");

var googleSteps = function() {
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Codefordream$/, function(callback) {
      this.spooky.thenOpen('http://www.codefordream.com');
      this.spooky.then(function(){
              this.capture('on_codefordream.png');
      });
      console.log("I am on Codefordream");
      //this.home_page.visit(callback);
      callback();
  });

  When(/^Code for dream user login$/, function(callback) {

      //this.home_page.input_user_and_pwd();
//      this.home_page.press_login();
      this.spooky.then(function () {
          this.thenClick('#switch-to-login',function(){
          });
          this.then(function(){
              this.fillSelectors('#login-form',{
                  'input#login-user-name':'xyooyy',
                  'input#login-pwd':'31415926'
              },true);
          });
          this.thenClick('#login-btn',function(){
              this.wait(1000,function(){
                  this.capture('login.png');
              });
          });
      });

      callback();
  });
    Then(/^welcome,xyooyy$/,function(callback){
        this.spooky.then(function(){
            this.capture('login.png');
            this.emit('casper_log',this.getHTML('b'));
           // assert.equal('a','a')
            });
        /*this.spooky.then([function(){
            this.test.assertEqual(this.getHTML('b'),'Welcome,xyooyy');
        }]);*/
       // this.spooky.run();
        callback();
    })
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
