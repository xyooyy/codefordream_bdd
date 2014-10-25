function find_spooky_api(api_key,api_param){
    var spooky_api = {'open_url':'\nthis.spooky.thenOpen("@param")','then':'this.spooky.then(function(){@param})'}
    var api_funciton = spooky_api[api_key].replace(/@param/,api_param);
    return api_funciton;
}

module.exports = {find:find_spooky_api};