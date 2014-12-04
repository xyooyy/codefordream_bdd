var stepDef = function() {
    this.World = require("../support/world.js").World;

    this.Then(/^submit and jump to continue btn$/,function(callback){
        var assert = this.assert;
        this.browser.click('#submit_btn')
            .pause(6000)
            .url('http://www.codefordream.com/courses/js_intermediate/sections')
            .pause(3000)
            .execute(function(){
                $('a[onclick="continue_to_practise()"]').click()
            })
            .pause(3000)
            .isExisting('#vertical-navbar',function(err,isExisting){
//                此处断言目前只测试跳转功能,跳转到挑战页面,没有对是否应该是这个页面作进一步的判断
                assert.ok(isExisting);
                callback();
            })
    })
};

module.exports = stepDef;
