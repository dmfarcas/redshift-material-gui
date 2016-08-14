export function setCrons(data) {
  console.log("CONRJRRJ", data);

  var crontab = require('node-crontab');
  var jobId = crontab.scheduleJob("*/1 * * * *", function(){ //This will call this function every 2 minutes
    console.log("It's been 1 minutes!");
  });
  }
