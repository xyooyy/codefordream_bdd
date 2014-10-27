var fs = require('fs');
var spooky_api = require('./spooky_api.js');
var casper_api = require('./casper_api.js');

var json_files = fs.readdirSync('./features_json');

function read_json_file(file_name){
    var base_path = './features_json/';
    var feature_json = fs.readFileSync(base_path+file_name,'utf-8');
    return JSON.parse(feature_json);
}

function create_feature_file(feature_file_json,file_name){
    fs.open('./features/'+file_name,'w',0666,function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.write(fd, make_feature_file_content(feature_file_json), 0, 'utf8', function(err) {
                if(err) {
                    console.log('出错信息：' + err);
                } else {
                    fs.closeSync(fd);
                }
            });
        }
    })
}

function create_step_definitions_file(feature_data,file_name){
    fs.open('./features/step_definitions/'+file_name,'w',0666,function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.write(fd, make_step_definitions_file_content(feature_data), 0, 'utf8', function(err) {
                if(err) {
                    console.log('出错信息：' + err);
                } else {
                    fs.closeSync(fd);
                }
            });
        }
    })
}

function make_step_definitions_file_content(feature_data){
//    console.log(feature_data.step_definitions_file)
    var given_description = feature_data.feature_file.feature.scenarios[0].given;
    var when_description = feature_data.feature_file.feature.scenarios[0].when;
    var then_description = feature_data.feature_file.feature.scenarios[0].then;
    var given = feature_data.step_definitions_file.scenarios[0].given;
    var when = feature_data.step_definitions_file.scenarios[0].when;
    var then = feature_data.step_definitions_file.scenarios[0].then;
    var given_code = insert_keyword_steps(given);
    var when_code = insert_keyword_steps(when);
    var then_code = insert_keyword_steps(then);

    var cucumber_code = make_keywords_function();
    cucumber_code = insert_keyword_description('given',given_description,cucumber_code).replace(/@given_code/,given_code);
    cucumber_code = insert_keyword_description('when',when_description,cucumber_code).replace(/@when_code/,when_code);
    cucumber_code = insert_keyword_description('then',then_description,cucumber_code).replace(/@then_code/,then_code);
    return cucumber_code;
}

function insert_keyword_steps(keyword){
    var content = '';
    var casper_content = '';
    var i = 1;
    while(true){
        var callback_content = '';
        if(!keyword['step_'+i]){
            break;
        }
        if('open_url' in keyword['step_'+i]){
            content += spooky_api.find('open_url',keyword['step_'+i]['open_url']);
        }
        if('fill_form_id' in keyword['step_'+i]){
            casper_content += casper_api.fill_form_by_id(keyword['step_'+i].fill_form_id);
        }
        if('test_begin' in keyword['step_'+i]){
            casper_content += casper_api.test_begin(keyword['step_'+i].test_begin);
        }
        if('callback' in keyword['step_'+i]){
            casper_content += insert_step_callback_function(keyword['step_'+i],callback_content);
        }else{
            for(var key in keyword['step_'+i]) {
                if(casper_api.find_out(key)) {
                    casper_content += casper_api.find(key, keyword['step_'+i][key]);
                }
            }
        }
        i++;
    }

    content +='\nthis.spooky.then(function(){'+casper_content+'})';
    console.log(content);
    return content;
}

function insert_step_callback_function(step,callback_content){
    var cb_new_1;
    if('callback' in step){
        for(var key in step){
            if(casper_api.find_out(key)){
                cb_new_1 = casper_api.find(key,step[key]);
                for(var key_2 in step.callback){
                    if(casper_api.find_out(key_2)){
                        var cb_new = cb_new_1.replace(/@callback/,casper_api.find(key_2,step.callback[key_2]));
//                        console.log(cb_new)
                        return insert_step_callback_function(step.callback.callback,cb_new);
                    }
                }
            }
        }
    }else{
        for(var key_3 in step) {
            if(casper_api.find_out(key_3)) {
               return callback_content.replace(/@callback/,casper_api.find(key_3, step[key_3]));
            }
        }
    }

}

function insert_keyword_description(keyword,keyword_description,cucumber_code){
    var new_cucumber_code;
    switch(keyword){
        case 'given': new_cucumber_code = cucumber_code.replace(/@given_description/,keyword_description);
            break;
        case 'when': new_cucumber_code = cucumber_code.replace(/@when_description/,keyword_description);
            break;
        case 'then': new_cucumber_code = cucumber_code.replace(/@then_description/,keyword_description);
            break;
    }
    return new_cucumber_code;
}

function make_keywords_function(){
    var given_function = "\n Given(/^@given_description$/, function(callback) {@given_code; callback();\n})"
    var when_function = "\n When(/^@when_description$/, function(callback) {@when_code; callback();\n})"
    var then_function = "\n Then(/^@then_description$/, function(callback) {@then_code; callback();\n})"
    var cucumber_code ="var CucumberWorld = require('../support/world').World;\n";
    cucumber_code += "var Steps = function() {\nvar Given = When = Then = this.defineStep;\n this.World = CucumberWorld;@given;@when;@then; \n};\n module.exports = Steps;"
    cucumber_code = insert_keyword_function('given',given_function,cucumber_code);
    cucumber_code = insert_keyword_function('when',when_function,cucumber_code);
    cucumber_code = insert_keyword_function('then',then_function,cucumber_code);
    return cucumber_code;
}

function insert_keyword_function(keyword,keyword_function,cucumber_code){
    var new_cucumber_code;
    switch(keyword){
        case 'given': new_cucumber_code = cucumber_code.replace(/@given/,keyword_function);
            break;
        case 'when': new_cucumber_code = cucumber_code.replace(/@when/,keyword_function);
            break;
        case 'then': new_cucumber_code = cucumber_code.replace(/@then/,keyword_function);
            break;
    }
    return new_cucumber_code;
}

function make_feature_file_content(feature_file_json){
    var content = 'Feature:'+feature_file_json.feature.content+'\n\t';
    if(!feature_file_json.feature.scenario){
        for(var index in feature_file_json.feature.scenarios){
            content += 'Scenario:'+feature_file_json.feature.scenarios[index].scenario+'\n\t\t';
            content += output_keyword_content(feature_file_json.feature.scenarios[index],'givens');
            content += output_keyword_content(feature_file_json.feature.scenarios[index],'whens');
            content += output_keyword_content(feature_file_json.feature.scenarios[index],'thens');
        }
    }
    content += '\tAnd run';
    return content;
}

function output_keyword_content(scenario,keyword) {
    if (!scenario[keyword]) {
        var keyword_content = upper_keyword(keyword) + '\x20' + scenario[keyword.substring(0, keyword.length - 1)] + '\n\t';
        if (keyword == 'thens') {
            return keyword_content;
        }
        return keyword_content + '\t';
    }
    var content = '';
    for (var index in scenario[keyword]) {
        var keyword_array_content = upper_keyword(keyword) + '\x20' + scenario[keyword][index] + '\n\t';
        if (keyword == 'thens') {
            content += keyword_array_content;
        }
        content += keyword_array_content + '\t';
    }
    return content;
}

function upper_keyword(keyword){
    var new_keyword;
    new_keyword = keyword[0].toUpperCase()+keyword.substring(1,keyword.length-1);
    return new_keyword;
}

function config(){
    for(var i = 0;i < json_files.length;i++){
        var feature_data = read_json_file(json_files[i]);
        var feature_file_name = json_files[i].split('.')[0]+'.feature';
        var step_definitions_file_name = json_files[0].split('.')[0]+'_steps.js';
        create_feature_file(feature_data.feature_file,feature_file_name);
        create_step_definitions_file(feature_data,step_definitions_file_name);
    }
}

config();
