const mongoose = require('mongoose');
const dbUrl = 'mongodb://eric22:Sa4482AZ@ds137611.mlab.com:37611/heroku_6jc061vh';

mongoose.connect(dbUrl);

// Close the mongoose connection on Control-C
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

require('../models/employee');
require('../models/team');
