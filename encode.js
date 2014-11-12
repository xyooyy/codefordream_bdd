var fs = require('fs');

module.exports.encode_practice_answer = function(answer_url){
    var answer_code = fs.readFileSync(answer_url,'utf-8');
    return encodeURIComponent(answer_code) ;
}

