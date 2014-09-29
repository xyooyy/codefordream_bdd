var HomePage = require('./google_land').Land;

var CucumberJsExampleWorld = function() {
  console.log("CucumberJsExampleWorld");
  this.google = new GoogleLand();
};
exports.World = CucumberJsExampleWorld;
