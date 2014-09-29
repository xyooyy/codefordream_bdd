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

//    var test = this.browser.query(".btn","登录");
    this.browser.clickLink(".header-btn",function(err){if (err) console.log("show_login "+err);   });
};

HomePage.prototype.input_user_and_pwd = function(query, callback) {
    var user_field = this.browser.document.getElementById("login-user-name");
    assert(user_field, "no user field");
    user_field.value = "xyooyy";

    var password_field = this.browser.document.getElementById("login-pwd");
    assert(password_field, "no pwd feild");
    password_field.value = "31415926";
}

HomePage.prototype.press_login = function()
{
    this.browser.pressButton("登录",function(err){
        if (err)
        {
            console.log("press_login "+err);
        }
    });
}

HomePage.prototype.login_succ = function()
{
    var welcome = this.browser.querySelector(".welcome");
    console.log(welcome.toString());

}




module.exports = HomePage;
