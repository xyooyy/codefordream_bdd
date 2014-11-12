var CucumberWorld = require('../support/world').World;
var Steps = function () {
    var Given = When = Then = this.defineStep;
    this.World = CucumberWorld;
    Given(/^I am on (.+) practice with (.+)$/, function (name,url,callback) {
        console.log('----------------Testing '+name+' practice--------------');
        this.spooky.then(function(){
            phantom.addCookie({
                'name':'codedu-online-db',
                'value':'s%3A1RIAKG2fqTb5wg45HPU5cZkn.oT8%2BpHlRgbkbv52%2FmjC9G%2Fxi8cZS8vnyGturXVj87vI',
                'domain':'www.codefordream.com'
            })
        });
        this.spooky.thenOpen(url)
        callback();
    });
    When(/^input (.+) in (.+) and submit it$/, function (answer,file_name,callback) {
        console.log('================'+answer,file_name)
        var answer_encode = this.encode(answer);
        var file_id = file_name.split('.')[0];

        this.spooky.then([{file_name:file_name,file_id:file_id,answer_encode:answer_encode},function () {
            var a = this.evaluate(function(file_name,file_id,answer_encode){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);
                var file = document.getElementById(file_id);
                var isReadOnly = false;
                file.value = window.decodeURIComponent(answer_encode);
                editor_manager.files[file_name] = file.value;
                editor_manager.editors[file_name] = editor_manager.create_editor(file,isReadOnly);
                return 1;
            },file_name,file_id,answer_encode);
            this.emit('casper_log',a);
        }]);
        callback();
    });
    Then(/^successful challenge$/, function (callback) {
        this.spooky.then(function () {
            this.click('#submit_btn');
            this.wait(6000,function(){
                this.capture('hello.png');
            })
            phantom.casperTest = true;
            var casper = this;
            this.wait(5000,function(){
                this.test.begin("hello world challenge succeed", 1, function (test) {
                    test.assertExists('div.hide#fail_btn_grop');
                    test.done();
                })
            })
        })
        callback();
    });
};
module.exports = Steps;