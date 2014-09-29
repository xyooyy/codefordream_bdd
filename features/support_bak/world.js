var HomePage = require('./home_page');

var CucumberWorld = function(callback) {
    this.home_page = new HomePage();
    callback();
};
module.exports.World = CucumberWorld;
