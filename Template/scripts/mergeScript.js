//var require = require('requirejs');

var merge = require('deepmerge');
var fs = require('fs');

var application = require('./json/application.json');
//var merge1 = merge(application);
var publicZone = require('./json/public-zone.json');
var merge2 = merge(application, publicZone);
var privateZone = require('./json/private-zone.json');
var merge3 = merge(merge2, privateZone);
var roles = require('./json/roles.json');
var merge4 = merge(merge3, roles);
var router = require('./json/router.json');
var merge5 = merge(merge4, router);
var startupCode = require('./json/startup-code.json');
var merge6 = merge(merge5, startupCode);
var userCode = require('./json/user-code.json');
var merge7 = merge(merge6, userCode);
var packages = require('./json/packages.json');
var merge8 = merge(merge7, packages);
var files = require('./json/files.json');
var merge9 = merge(merge8, files);

//var pageSample = require('./json/page-sample.json');
//var fieldsSample = require('./json/fields-sample.json');


var outputFilename = 'compiled.json';

fs.writeFile(outputFilename, JSON.stringify(merge9, null, 2), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outputFilename);
  }
});