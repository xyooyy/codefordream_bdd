var CucumberWorld = require('../support/world').World;
var Steps = function () {
    var Given = When = Then = this.defineStep;
    this.World = CucumberWorld;
    Given(/^I am on Hello World practice$/, function (callback) {
        this.spooky.then(function(){
            phantom.addCookie({
                'name':'codedu-online-db',
                'value':'s%3A1RIAKG2fqTb5wg45HPU5cZkn.oT8%2BpHlRgbkbv52%2FmjC9G%2Fxi8cZS8vnyGturXVj87vI',
                'domain':'www.codefordream.com'
            })
        });
        this.spooky.thenOpen("http://www.codefordream.com/courses/js_basic/sections/section_0/practices/normal/practice_hello_world")
        callback();
    });
    When(/^input correct answer and submit it$/, function (callback) {
        this.spooky.then(function () {
            var a = this.evaluate(function(){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);

                var file = document.getElementById("challenge_0");
                var isReadOnly = false;
                file.value = 'console.log("hello world")';
                editor_manager.files['challenge_0.js'] = file.value;
                editor_manager.editors['challenge_0.js'] = editor_manager.create_editor(file,isReadOnly);
                return 1;
            });
            this.emit('casper_log',a);
        });
        callback();
    });
    Then(/^successful challenge$/, function (callback) {
        this.spooky.then(function () {
            this.click('#submit_btn');
            this.wait(4000,function(){
                this.capture('hello.png');
            })
            phantom.casperTest = true;
            var casper = this;
            this.wait(4000,function(){
                this.test.begin("hello world challenge succeed", 1, function (test) {
                    test.assertDoesntExist('div.btn-row.hide#succeed_btn_grop_2');
                    test.done();
                })
            })
        })
        callback();
    });
};
module.exports = Steps;