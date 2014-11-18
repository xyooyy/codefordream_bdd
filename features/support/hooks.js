module.exports = function(){
    this.Before(function(callback){
        this.browser.init();
        callback();
    })
    this.After(function(callback){
        this.browser.end()
        callback();
    })
}