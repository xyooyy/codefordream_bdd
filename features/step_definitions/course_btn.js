var stepDef = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^login in and visit url$/, function (callback) {
        this.browser
            .url('http://www.codefordream.com')
            .deleteCookie('codedu-online-db')
            .setCookie({
                'name': 'codedu-online-db',
                'value': 's%3AqXvm9cA8EHzmdEQhfaP4XnII.bKRB1CDbiW7D8GVVUK6w36l5DJDs4KDh7dpNfW1wlgg',
                'domain': 'www.codefordream.com'
            })
            .url('http://www.codefordream.com/courses/css_basic/sections/section_4/practices/normal/practice_1');
        callback();
    });

    this.When(/^click repeat learn btn$/, function (callback) {
        this.browser
            .execute(function(){
                $('.mCSB_container').css('top', '-100%');
            })
            .pause(3000)
            .click('#tips-btn')
            .pause(3000)
            .execute(function(){
                $('.mCSB_container').css('top', '-100%');
            })
            .pause(3000)
            .click('#answer-btn')
            .execute(function(){
                $('.mCSB_container').css('top', '-150%');
            })
        callback()
    });

    this.Then(/^successful result$/, function (callback) {
        var assert = this.assert;
        this.browser.pause(3000)
            .isExisting('a.disabled#answer-btn', function (err, isExisting) {
                assert.ok(isExisting);
                callback();
            })
    })
};

module.exports = stepDef;