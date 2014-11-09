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
        this.spooky.thenOpen("http://www.codefordream.com/courses/js_basic/sections/section_1/practices/normal/practice_code_comments");
        callback();
    });
    When(/^input correct answer of the practice and submit it$/,function(callback){
        this.spooky.then(function () {
            this.evaluate(function(){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);
                var file = document.getElementById("challenge_1");
                var isReadOnly = false;
                file.value = window.decodeURIComponent("%2F%2F%E5%9C%A8%E7%AC%AC%E4%BA%8C%E8%A1%8C%E7%9A%84%E5%BC%95%E5%8F%B7%E4%B8%AD%E8%BE%93%E5%85%A5%E4%BD%A0%E7%9A%84%E6%98%B5%E7%A7%B0%EF%BC%8C%E7%84%B6%E5%90%8E%E7%82%B9%E5%87%BB%22%E4%BF%9D%E5%AD%98%E5%B9%B6%E6%8F%90%E4%BA%A4%22%E6%8C%89%E9%92%AE%E4%BB%A5%E6%9F%A5%E7%9C%8B%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C%E3%80%82%0Avar%20name%20%3D%20%22voctor%22%3B%0Aconsole.log('Hello%20'%20%2B%20name%20%2B%20'!')%3B%0A%2F*%0A%E7%AC%AC%E4%B8%89%E8%A1%8C%E4%BB%A3%E7%A0%81%E8%A2%AB%E8%BF%90%E8%A1%8C%E6%97%B6%EF%BC%8C%E5%8F%98%E9%87%8Fname%E4%BC%9A%E8%A2%AB%E6%9B%BF%E6%8D%A2%E6%88%90%E5%85%B6%E8%A2%AB%E8%B5%8B%E4%BA%88%E7%9A%84%E5%80%BC(%E8%BF%99%E9%87%8C%E6%98%AF%E4%BD%A0%E8%BE%93%E5%85%A5%E7%9A%84%E6%98%B5%E7%A7%B0%E5%AD%97%E7%AC%A6%E4%B8%B2)%E3%80%82%0A%22%2B%22%E5%8F%B7%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E5%B0%86%E5%A4%9A%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5%E6%88%90%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%82%0A*%2F");
                editor_manager.files["challenge_1.js"] = file.value;
                editor_manager.editors["challenge_1.js"] = editor_manager.create_editor(file,isReadOnly);
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
                this.capture('hello.png');
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