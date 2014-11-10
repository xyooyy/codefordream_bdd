var fs = require('fs');
var readline = require("readline");
var child_process = require('child_process');
var query_string = require("querystring");
var practice_test_code = fs.readFileSync('./practice_test_template.js','utf-8');
var practice_config_json = JSON.parse(fs.readFileSync('./practice_config.json','utf-8'));

function create_practice_test_file_content(one_practice_config_data){
    var answer_code = fs.readFileSync(one_practice_config_data.answer_file_info.answer_path,'utf-8');
    var result = query_string.escape(answer_code)
    var file_id = one_practice_config_data.answer_file_info.file_name.split('.')[0];

    practice_test_code = practice_test_code.replace(/@practice_url/,one_practice_config_data.practice_url);
    practice_test_code = practice_test_code.replace(/@practice_answer/,result);
    practice_test_code = practice_test_code.replace(/@file_id/,file_id);
    practice_test_code = practice_test_code.replace(/@file_name/g,one_practice_config_data.answer_file_info.file_name);
    return practice_test_code;
}

function create_practice_test_file(test_practice_name){
    fs.open('./features/step_definitions/one_practice_steps.js','w',0666,function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.write(fd, create_practice_test_file_content(practice_config_json[test_practice_name]), 0, 'utf8', function(err) {
                if(err) {
                    console.log('出错信息：' + err);
                } else {
                    fs.closeSync(fd);
                }
            });
        }
    })
}

function get_testing_practice_name(){
    var all_practices = '\n';
    var index = 1;
    for(var key in practice_config_json){
        all_practices += index+'.'+key+'|';
        index++;
    }
    console.log('All Test Practices:'+all_practices);
    var reader = readline.createInterface(process.stdin, process.stdout, null);
    reader.question("Which practice do you test,please input its name:", function(answer) {
        if (answer in practice_config_json) {
            create_practice_test_file(answer);
            child_process.exec('cucumber.js ./features/one_practice.feature',function(error,stdout,stderr){
                console.log('Stdout: ' + stdout);
            })
            console.log('Testing...');
            reader.close();
        } else {
            console.log('Sorry,no the practice')
            reader.close();
        }
    });
}

get_testing_practice_name();

