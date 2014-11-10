var CucumberWorld = require('../support/world').World;
var Steps = function () {
    var Given = When = Then = this.defineStep;
    this.World = CucumberWorld;
    Given(/^I am on the practice$/,function(callback){
        this.spooky.then(function(){
            phantom.addCookie({
                'name':'codedu-online-db',
                'value':'s%3A1RIAKG2fqTb5wg45HPU5cZkn.oT8%2BpHlRgbkbv52%2FmjC9G%2Fxi8cZS8vnyGturXVj87vI',
                'domain':'www.codefordream.com'
            })
        });
        this.spooky.thenOpen("@practice_url");
        callback();
    });
    When(/^input correct answer of the practice and submit it$/,function(callback){
        this.spooky.then(function () {
            this.evaluate(function(){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);
                var file = document.getElementById("@file_id");
                var isReadOnly = false;
                file.value = window.decodeURIComponent("@practice_answer");
                editor_manager.files["@file_name"] = file.value;
                editor_manager.editors["@file_name"] = editor_manager.create_editor(file,isReadOnly);
                return 1;
            });
            this.emit('casper_log',1);
        });
        callback();
    });
    Then(/^successful challenge to the practice$/, function (callback) {
        this.spooky.then(function () {
            this.click('#submit_btn');
            this.wait(4000,function(){
                this.capture('practice_test_result.png');
            })
            phantom.casperTest = true;
            this.wait(4000,function(){
                this.test.begin("practice challenge succeed", 1, function (test) {
                    test.assertDoesntExist('div.btn-row.hide#succeed_btn_grop_2');
                    test.done();
                })
            })
        })
        callback();
    });
};
module.exports = Steps;