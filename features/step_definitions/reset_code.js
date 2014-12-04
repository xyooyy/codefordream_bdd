var stepDef = function(){
    this.World = require("../support/world.js").World;

    this.Then(/^successful result reset code$/, function (callback) {
        var assert = this.assert;
        this.browser.execute(function(){
                $('.cm-variable').after('<span class="cm-variable">测试重置</span>');
            })
            .pause(3000)
            .execute(function(){
                $('#edting_btn_grop .reset-btn a').click()
            })
            .pause(3000)
            .click('#submit_btn')
            .pause(5000)
            .isExisting('div.hide#fail_btn_grop',function(err,isExisting){
                assert.ok(isExisting);
                callback();
            })
    })
};

module.exports = stepDef;