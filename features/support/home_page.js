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
    this.browser.visit("/",
    function(err) {
        assert.ok(me.browser.success);
        //me.show_login(function(){
            me.input_user_and_pwd();
            me.press_login();
            me.check_login();
        //});
    });
    //this.browser.clickLink(".header-btn",callback);

    callback();
};


//HomePage.prototype.load_login = function()
//{
//    return this.browser.document.querySelector("#switch-to-login")
//}
HomePage.prototype.show_login = function(callback) {
    console.log("show_login");

    this.browser.clickLink(".header-btn",callback);
};

HomePage.prototype.input_user_and_pwd = function() {

    console.log("input_user_and_pwd");

        var user_field = this.browser.document.getElementById("reg-user-name");
        //assert(user_field, "no user field");
        user_field.value = "xyooyy198404121";

        var password_field = this.browser.document.getElementById("reg-pwd");
        //assert(password_field, "no pwd feild");
        password_field.value = "31415926";
        var repassword_field = this.browser.document.getElementById("reg-repwd");
        repassword_field.value = "31415926";
        console.log(user_field.toString());
        console.log(password_field.toString());
}

HomePage.prototype.press_login = function()
{
    console.log("press_login");

    var button = this.browser.document.querySelector("#sign-up-btn");
    button.focus();
    console.log(button.toString());
    this.browser.fire(button, "click",false);
}

HomePage.prototype.check_login = function()
{
    var me = this;
    this.browser.wait(name_no_hide,function()
    {
        var welcome = me.browser.document.querySelector(".col-xs-12.header-text-container");
        var text = welcome.getElementsByTagName("b")[0].textContent;
        console.log("text "+text.trim());
    });
    function name_no_hide()
    {
        var welcome = me.browser.document.querySelector(".col-xs-12.header-text-container");
        var text = welcome.getElementsByTagName("b")[0];
        return text;
    }
}

module.exports = HomePage;



//    this.browser.fire(welcome,"onpropertychange", function(err)
//    {
//        //var welcome = me.browser.querySelector(".col-xs-12.header-text-container").getElementsByTagName("b")[0];
////        console.log(welcome.value);
//        if (err)
//        {
//            console.log("welcome  "+err);
//        }
////        var welcome_doc = welcome.getElementsByTagName("b")[0];
//        var welcome1 = me.browser.querySelector("#welcome");
//        console.log(welcome1.toString());
//    });
//        then(function(){
//        console.log("this.browser.wait();");});

//        null,function()
//        {
//            var welcome = me.browser.querySelector("#welcome");
//            console.log(welcome.className);
//        });