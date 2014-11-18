var stepDef = function() {
    this.World = require("../support/world.js").World;
    this.Given(/^login in with name 1 (.+)$/, function(url,callback) {
        this.browser.url('http://www.codefordream.com')
            .deleteCookie('codedu-online-db')
            .setCookie({
                'name':'codedu-online-db',
                'value':'s%3AqXvm9cA8EHzmdEQhfaP4XnII.bKRB1CDbiW7D8GVVUK6w36l5DJDs4KDh7dpNfW1wlgg',
                'domain':'www.codefordream.com'
            })
            .url(url);
        callback();
    });

    this.When(/^select answer of 2th course (.+)$/, function(name,callback) {
        console.log('-----------name-------------' + name)
        this.browser.click('input[id=\"' + name + '\"]')
            .pause(4000)
        callback();
    });

    this.Then(/^successful course 2$/,function(callback){
        console.log('-----------3-------------')
        var assert = this.assert;
        this.browser.click('#submit_answer')
            .pause(4000)
            .isExisting('p.hide#ansIncorrect',function(err,isExisting){
                assert.ok(isExisting);
                callback();
            })
    })
};

module.exports = stepDef;
