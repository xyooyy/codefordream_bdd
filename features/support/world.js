var HomePage = require('./google_land');

var CucumberJsExampleWorld = function() {
  console.log("CucumberJsExampleWorld");
  this.google = new GoogleLand();
};
exports.World = CucumberJsExampleWorld;
