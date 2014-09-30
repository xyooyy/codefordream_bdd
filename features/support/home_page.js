var Browser = require("zombie");
var assert = require("assert");

var HomePage = function(world) {
  this.browser =  Browser.create({debug:true});
  Browser.localhost("http://www.codefordream.com");
};
//
HomePage.prototype.visit = function(callback) {
    console.log("test");
    var me = this;
    this.browser.visit(
      "/",
    function(err) {
        assert.ok(me.browser.success);
        //this.browser.clickLink(".header-btn",callback);
        me.show_login(function(){
            me.input_user_and_pwd();
            me.press_login();
        });
        callback();
    });
};


HomePage.prototype.a = function(){
    console.log('visit call back');
}
//HomePage.prototype.load_login = function()
//{
//    return this.browser.document.querySelector("#switch-to-login")
//}
HomePage.prototype.show_login = function(callback) {
    console.log("show_login");

    //var btn = this.browser.querySelector(".header-btn");
    this.browser.clickLink(".header-btn",callback());
};

HomePage.prototype.input_user_and_pwd = function() {

    console.log("input_user_and_pwd");
    var user_field = this.browser.document.getElementById("login-user-name");

    //assert(user_field, "no user field");
    user_field.value = "xyooyy";

    var password_field = this.browser.document.getElementById("login-pwd");
    //assert(password_field, "no pwd feild");
    password_field.value = "31415926";
    console.log(user_field.toString());
    console.log(password_field.toString());
}

HomePage.prototype.press_login = function()
{
    console.log("press_login");
    this.browser.pressButton("#login-btn",function(err){
        console.log("pressButton");
        if (err)
        {
            console.log("press_login "+err);
        }
        var welcome = this.browser.querySelector(".welcome")
        console.log(welcome);
    });
}





module.exports = HomePage;
