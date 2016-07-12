"use strict";

const exec = require('child_process').exec;


var redshift = {
  start: function() {
    // exec('redshift', (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    //   }
    //   console.log(`stdout: ${stdout}`);
    //   console.log(`stderr: ${stderr}`);
    // });  
  },
       
  stop: function() {
    exec('pkill redshift', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });  
  }
}


module.exports = redshift;