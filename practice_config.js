var fs = require('fs');
var practice_test_code = fs.readFileSync('./practice_test_template.js','utf-8');
var practice_config_json = JSON.parse(fs.readFileSync('./practice_config.json','utf-8'));

function create_practice_test_file_content(one_practice_config_data){
    var answer_code = fs.readFileSync(one_practice_config_data.answer_file_info.answer_path,'utf-8');
    var file_id = one_practice_config_data.answer_file_info.file_name.split('.')[0];
    practice_test_code = practice_test_code.replace(/@practice_url/,one_practice_config_data.practice_url);
    practice_test_code = practice_test_code.replace(/@practice_answer/,answer_code);
    practice_test_code = practice_test_code.replace(/@file_id/,file_id);
    practice_test_code = practice_test_code.replace(/@file_name/g,one_practice_config_data.answer_file_info.file_name);
    return practice_test_code;
}

function create_practice_test_file(){
    fs.open('./features/step_definitions/one_practice_steps.js','w',0666,function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.write(fd, create_practice_test_file_content(practice_config_json.hello_world), 0, 'utf8', function(err) {
                if(err) {
                    console.log('出错信息：' + err);
                } else {
                    fs.closeSync(fd);
                }
            });
        }
    })
}

create_practice_test_file();