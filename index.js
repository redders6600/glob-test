#! /usr/bin/env node

var Q     = require('q'),
    glob  = Q.nfbind(require('glob')),
    chalk = require('chalk'),
    args  = process.argv.slice(2);


var globPromise;

if(args.length === 1){

  var expr = args[0];

  globPromise = glob(expr);

} else {

  // already expanded on command line before it got to us.
  globPromise = Q(args);

}

globPromise

  .then( function (files){

    if(files === undefined || files.length === 0)
      return console.log(chalk.yellow("Your glob didn't match anything"));

    console.log(chalk.green("You glob matched %d %s:"), files.length, files.length === 1 ? 'file' : 'files');

    for(var i in files){
      console.log(files[i]);
    }

  })

  .catch( function (err){

    return console.error(chalk.red("Your glob produced the following error:"), e);

  });
