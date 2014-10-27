var CucumberWorld = require('../support/world').World;

var googleSteps = function() {
  var Given = When = Then = this.defineStep;
  this.World = CucumberWorld;

  Given(/^I am on Codefordream$/, function(callback) {
      this.spooky.thenOpen('http://www.codefordream.com');
      this.spooky.then(function(){
              //this.capture('on_codefordream.png');
      });
      console.log("I am on Codefordream");
      callback();
  });

  When(/^Code for dream user login$/, function(callback) {
      this.spooky.then(function () {
          this.thenClick('#switch-to-login',function(){
          });
          this.then(function(){
              this.fillSelectors('#login-form',{
                  'input#login-user-name':'xyooyy',
                  'input#login-pwd':'31415926'
              });
          });
          this.thenClick('#login-btn',function(){
              this.wait(1000,function(){
                  //this.capture('login.png');
              });
          });
      });

      callback();
  });

    Then(/^welcome,xyooyy$/,function(callback){
        this.spooky.then(function(){
            this.capture('login.png');
            this.emit('casper_log',this.getHTML('b'));
            phantom.casperTest = true;
            var casper = this;
            this.test.begin('login succeed',1,function(test){
                test.assertEqual(casper.getHTML('b'),'Welcome,xyooyy');
                test.done();
            })

            });
        callback();
    })
};

module.exports = googleSteps;
