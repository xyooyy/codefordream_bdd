var stepDef = function(){
    this.World = require("../support/world.js").World;

    this.Given(/^I am on (.+) practice with (.+)$/,function(name,url,callback){
        console.log('----------------Testing '+name+' practice--------------');

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

    this.When(/^input (.+) in (.+) and submit it$/, function (answer,file_name,callback){
        var answer_code = this.read_answer_file(answer);
        var file_id = file_name.split('.')[0];
        this.browser.execute(function(file_name,file_id,answer_code){
            var parent = document.getElementById(file_id + '_page');
            var child = document.getElementsByClassName('CodeMirror CodeMirror-wrap cm-s-blackboard')[0];
            parent.removeChild(child);
            var editor_manager_id = "editor_manager";
            editor_manager = new EditorManager(editor_manager_id);
            var file = document.getElementById(file_id);
            var isReadOnly = false;
            file.value = answer_code;
            editor_manager.files[file_name] = file.value;
            editor_manager.editors[file_name] = editor_manager.create_editor(file,isReadOnly);
            window.location.reload();
        },file_name,file_id,answer_code);

        callback();
    });

    this.Then(/^successful challenge$/, function (callback) {
        var assert = this.assert;
        this.browser.pause(2000)
                    .click('#submit_btn')
                    .pause(4000)
                    .isExisting('div.hide#fail_btn_grop',function(err,isExisting){
                assert.ok(isExisting);

                callback();
        })
    })
};

module.exports = stepDef;