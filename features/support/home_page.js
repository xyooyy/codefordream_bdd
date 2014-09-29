var Browser = require("zombie");
var assert = require("assert");

var HomePage = function(world) {
  this.browser =  Browser.create({debug:true});
};
//
HomePage.prototype.visit = function(callback) {
    console.log("visit");
    var me = this;
    this.browser.visit(
      "http://www.codefordream.com/",
      function(err) {
          assert.ok(me.browser.success);
          callback();
      }
    );


};

HomePage.prototype.query = function(query, callback) {

    this.browser.pressButton("登录",function(err){
        if (err)
        {
            console.log(err);
        }
        console.log("press 登录")

    });

    var user_field = this.browser.document.getElementById("login-user-name");
    user_field.value = "xyooyy";

    var password_field = this.browser.document.getElementById("login-pwd");
    password_field.value = "31415926";

    var login_button = this.browser.document.getElementById("login-btn");
    login_button.focus();
    this.browser.fire(login_button, "click", function(err){
        if (err)
        {
            console.log(err);
        }
        console.log("登录成功")});

};

HomePage.prototype.assertDisplayedLinkToURL = function(url, callback) {
    var linksToUrl = this.browser.css("a[href='" + url + "']");
    assert.ok(linksToUrl.length > 0);
    callback();
};


module.exports = HomePage;
