var stepDef = function(){
    this.World = require("../support/world.js").World;
    this.When(/^input (.+) in (.+) and submit it css basic$/, function (answer,file_name,callback){
        var answer_code = this.read_answer_file(answer);
        var file_id = file_name.split('.')[0];
        this.browser.click('a[href="#style_page"]')
        this.browser.execute(function(file_name,file_id,answer_code){
            var file_list = document.getElementsByClassName("area");
            var parent = document.getElementById(file_id + '_page');
            var child = document.getElementsByClassName('CodeMirror CodeMirror-wrap cm-s-blackboard')[1];
            parent.removeChild(child);
            var editor_manager_id = "editor_manager";
            editor_manager = new EditorManager(editor_manager_id);
            var file = document.getElementById(file_id);
            var isReadOnly = false;
            file.value = answer_code;
            _.each(file_list, function (file) {
                editor_manager.files[file.name] = file.value;
                editor_manager.editors[file.name] = editor_manager.create_editor(file, isReadOnly);
            });
        },file_name,file_id,answer_code);
        callback();
    });
};
module.exports = stepDef;