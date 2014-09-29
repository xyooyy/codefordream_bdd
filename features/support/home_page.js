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

HomePage.prototype.show_login = function(query, callback) {

    this.browser.pressButton("登录",function(err){
        if (err)
        {
            console.log(err);
        }
        console.log("press 登录")

    });
};

HomePage.prototype.input_user_and_pwd = function(query, callback) {
    var user_field = this.browser.document.getElementById("login-user-name");
    user_field.value = "xyooyy";

    var password_field = this.browser.document.getElementById("login-pwd");
    password_field.value = "31415926";
}

HomePage.prototype.press_login = function()
{
    var login_button = this.browser.document.getElementById("login-btn");
    login_button.focus();
    this.browser.fire(login_button, "click", function(err){
        if (err)
        {
            console.log(err);
        }
        console.log("登录成功")});
}




module.exports = HomePage;
