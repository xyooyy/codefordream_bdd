var googleSteps = function () {
    this.Before(function (callback) {
        this.spooky.start();
        callback();
    });

    this.After(function (callback) {
        this.spooky.destroy();
        callback();
    });
};

module.exports = googleSteps;
