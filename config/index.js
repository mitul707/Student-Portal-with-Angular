var config = require('./config');

module.exports = {
    getDBConnectionString: function() {
        return "mongodb://" + config.user + ":" + config.pass + "@ds149030.mlab.com:49030/studentdata";
    }
}