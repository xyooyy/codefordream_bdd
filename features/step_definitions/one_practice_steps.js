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
        this.spooky.thenOpen("http://www.codefordream.com/courses/js_basic/sections/section_2/practices/normal/practice_simple_data_types");
        callback();
    });
    When(/^input correct answer of the practice and submit it$/,function(callback){
        this.spooky.then(function () {
            this.evaluate(function(){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);
                var file = document.getElementById("challenge_2_1");
                var isReadOnly = false;
                file.value = window.decodeURIComponent("var%20profile%20%3D%20%7B%20%22%E5%A7%93%E5%90%8D%22%20%3A%20'123'%2C%22%E5%AD%A6%E6%A0%A1%22%20%3A%20'123'%2C%22%E5%AD%A6%E5%8F%B7%22%20%3A%20123%2C%22%E4%B8%93%E4%B8%9A%22%3A'123'%7D%3B%0Aconsole.log(profile%5B%22%E5%AD%A6%E5%8F%B7%22%5D)%3B");
                editor_manager.files["challenge_2_1.js"] = file.value;
                editor_manager.editors["challenge_2_1.js"] = editor_manager.create_editor(file,isReadOnly);
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