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
module.exports = {find:find_casper_api,find_out:find_out};
