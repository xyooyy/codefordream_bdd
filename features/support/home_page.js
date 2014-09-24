var Browser = require("zombie");
var assert = require("assert");

var HomePage = function(world) {
  this.browser =  Browser.create({debug:true});
};

HomePage.prototype.visit = function(callback) {
    var me = this;
    this.browser.visit(
      "http://www.codefordream.com/",
      function(err) {
          assert.ok(me.browser.success);

          callback();
      }
  );
};

module.exports = HomePage;
