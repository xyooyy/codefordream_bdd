var phridge = require('phridge');
//var assert = require("assert");

var HomePage = function() {

};
//



HomePage.prototype.visit = function(callback) {
    console.log("test");
    var me = this;
    //var phantomProcess = phridge.spawn()
//    var page;
    phridge.spawn()
        .then(function (phantom) {
            phantom.run("#switch-to-login", function (selector, resolve) {

                console.log(selector);
                var page = webpage.create();

                page.open("http://www.codefordream.com", function () {
                    var text = page.evaluate(function (selector) {
                        var temp =  document.querySelector(selector);
                        click(temp);
                        return selector;
                        function click(el){
                            var ev = document.createEvent("MouseEvent");
                            ev.initMouseEvent(
                                "click",
                                true /* bubble */, true /* cancelable */,
                                window, null,
                                0, 0, 0, 0, /* coordinates */
                                false, false, false, false, /* modifier keys */
                                0 /*left*/, null
                            );
                            el.dispatchEvent(ev);
                        }
                    },selector);

                    setTimeout(function () {
                            console.log(text);
                             page.render("login.png");
                            resolve(page);
                    }, 5000);

                })
            }).then(function (page) {
            })
        });
    callback();
};


//HomePage.prototype.load_login = function()
//{
//    return this.browser.document.querySelector("#switch-to-login")
//}
HomePage.prototype.show_login = function(callback) {
    console.log("show_login");

    this.browser.fill.clickLink(".header-btn",callback);
};

HomePage.prototype.input_user_and_pwd = function() {
    var user_field = this.browser.document.getElementById("reg-user-name");
    user_field.value = "xyooyy198404122";

    var password_field = this.browser.document.getElementById("reg-pwd");
    password_field.value = "31415926";

    var repassword_field = this.browser.document.getElementById("reg-repwd");
    repassword_field.value = "31415926";
}

HomePage.prototype.press_login = function()
{
    console.log("press_login");

    var button = this.browser.document.querySelector("#sign-up-btn");
    button.focus();
    console.log(button.textContent.trim());
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