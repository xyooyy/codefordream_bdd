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
        this.spooky.thenOpen("http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_1_function");
        callback();
    });
    When(/^input correct answer of the practice and submit it$/,function(callback){
        this.spooky.then(function () {
            this.evaluate(function(){
                var editor_manager_id = "editor_manager";
                editor_manager = new EditorManager(editor_manager_id);
                var file = document.getElementById("challenge_7_1");
                var isReadOnly = false;
                file.value = window.decodeURIComponent("var%20all_data%20%3D%20%7Ba%3A%20123%2C%20b%3A%20'hello'%2C%20c%3A%20null%2C%20d%3A%20%5B'hello'%2C%20'world'%2C%20'!'%5D%7D%3B%0Afunction%20get_type(data)%20%7B%0A%20%20%20%20%2F%2F%E5%9C%A8%E4%B8%8B%E4%B8%80%E8%A1%8C%E6%B7%BB%E5%8A%A0%E4%BB%A3%E7%A0%81%EF%BC%8C%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%20type%20%EF%BC%8C%E5%B9%B6%E5%B0%86%20%E5%8F%82%E6%95%B0%20data%20%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%80%BC%E8%B5%8B%E7%BB%99%20type%E3%80%82%0A%20%20%20%20var%20type%20%3D%20typeof(data)%0A%0A%20%20%20%20var%20result%20%3D%20%22%E8%AF%A5%E6%95%B0%E6%8D%AE%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%98%AF%3A%22%20%2B%20type%3B%0A%20%20%20%20console.log(result)%3B%0A%7D%0Avar%20choose%20%3D%20'a'%3B%0Aget_type(all_data%5Bchoose%5D)%3B");
                editor_manager.files["challenge_7_1.js"] = file.value;
                editor_manager.editors["challenge_7_1.js"] = editor_manager.create_editor(file,isReadOnly);
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