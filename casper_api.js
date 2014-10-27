var casper_api = {
    'click_id':'\nthis.thenClick("@param",function(){@callback})',
    'wait':'\nthis.wait(@param,function(){@callback})',
    'capture':'\nthis.capture("@param")'};

function find_casper_api(api_key,api_param){
    var api_funciton = casper_api[api_key].replace(/@param/,api_param);
    return api_funciton;
}

function find_out(api_key){
    if(api_key in casper_api){
        return true;
    }
    return false;
}

function fill_form_by_id(form_data){
    var fill_form_function = '\nthis.fillSelectors("@form_id",{@inputs})';
    var inputs = '';
    for(var i = 0;i < form_data.inputs_id.length;i++){
        inputs += '"input'+form_data.inputs_id[i].id+'"'+':'+'"'+ form_data.inputs_id[i].value+'"';
        if(i < form_data.inputs_id.length-1){
            inputs += ',';
        }
    }
    fill_form_function = fill_form_function.replace(/@form_id/,form_data.id);
    fill_form_function = fill_form_function.replace(/@inputs/,inputs);
    return fill_form_function;
}

function test_begin(test_data){
    var test_code = 'phantom.casperTest = true;\nvar casper = this;\nthis.test.begin("@content",@assert_number,function(test){@asserts;\ntest.done();})';
    test_code = test_code.replace(/@content/,test_data.content);
    test_code = test_code.replace(/@assert_number/,test_data.asserts.length);
    test_code = test_code.replace(/@asserts/,get_assert_function(test_data.asserts));
    return test_code;
}

function get_assert_function(asserts){
    var test_asserts = {'api':{'assert_equal':'\ntest.assertEqual("@expected",@actual)'}};
    var asserts_function = '';
    for(var i = 0;i < asserts.length;i++){
        if('assert_equal' in asserts[i]){
            asserts_function += test_asserts.api.assert_equal.replace(/@expected/,asserts[i].assert_equal.expected).replace(/@actual/,asserts[i].assert_equal.actual)
        }
    }
    return asserts_function;
}
module.exports = {
    find:find_casper_api,
    find_out:find_out,
    fill_form_by_id:fill_form_by_id,
    test_begin:test_begin
};
