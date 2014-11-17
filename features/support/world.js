var assert = require('assert');
var webdriverio = require("webdriverio");
var fs = require('fs');
var client = webdriverio.remote({
    desiredCapabilities: {
        // You may choose other browsers
        // http://code.google.com/p/selenium/wiki/DesiredCapabilities
        browserName: 'phantomjs'
    },
    // webdriverio has a lot of output which is generally useless
    // However, if anything goes wrong, remove this to see more details
    logLevel: 'verbose'
});

client.init();


var World = function World(callback) {
    this.assert = assert;
    this.read_answer_file = function(answer_path){
        return fs.readFileSync(answer_path,'utf-8');
    };
    this.browser = client; // this.browser will be available in step definitions

    this.visit = function (url, callback) {
        this.browser.url(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

module.exports.World = World;
