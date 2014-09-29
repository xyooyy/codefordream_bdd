var Browser = require("zombie");
var HTML5  = require("html5");
var assert = require("assert");

var GoogleLand = function(world) {
  console.log("GoogleLand");
  this.browser = new Browser({runScripts:true, debug:false, htmlParser: HTML5});
};

GoogleLand.prototype.visitGoogle = function(callback) {
    console.log("visit");
    this.browser.visit(
    "http://www.google.com",
    function(err, browser, status) {
      if (err)
        throw new Error(err.message);
      callback();
    }
  );
};

GoogleLand.prototype.query = function(query, callback) {
  console.log("query")
  this.browser
    .fill("q", query)
    .pressButton(
      "btnG",
      function(err) {
        if (err)
          throw new Error(err.message);
        callback();
      }
    );
};

GoogleLand.prototype.assertDisplayedLinkToURL = function(url, callback) {
  var linksToUrl = this.browser.css("a[href='" + url + "']");
  assert.ok(linksToUrl.length > 0);
  callback();
};

exports.Land = GoogleLand;
