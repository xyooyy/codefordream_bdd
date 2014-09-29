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
//HomePage.prototype.visit = function(callback) {
//    console.log("visit");
//    this.browser.visit(
//        "http://www.google.com",
//        function(err, browser, status) {
//            if (err)
//                throw new Error(err.message);
//            callback();
//        }
//    );
//};

HomePage.prototype.query = function(query, callback) {
//    var btn = this.browser.document.getElementById("switch-to-login");
//    console.log(btn);
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
    this.browser.fire(login_button, "click", function(){return;});


};

HomePage.prototype.assertDisplayedLinkToURL = function(url, callback) {
    var linksToUrl = this.browser.css("a[href='" + url + "']");
    assert.ok(linksToUrl.length > 0);
    callback();
};


module.exports = HomePage;
