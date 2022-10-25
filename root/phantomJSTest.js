/*PhantomJS test script, to render browser elements in an asynchronous NodeJS
project.*/

var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('http://www.google.com', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var html = page.evaluate(function() {
      return document.getElementsByTagName('html')[0].innerHTML;
    });
    console.log(html);
  }
  phantom.exit();
});