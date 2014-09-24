
var googleSteps = function() {
  var Given = When = Then = this.defineStep;
//  this.World = CucumberJsExampleWorld;

  Given(/^I am on Google$/, function(callback) {
    console.log("I am on Google");
      callback();
  });

  When(/^I search for "(.*)"$/, function(query, callback) {
      console.log("I search for " + query);
      callback();
  });

  Then(/^I see a link to "(.*)"$/, function(url, callback) {
    console.log("I see a link to " + url);
      callback();
  });
};

module.exports = googleSteps;
