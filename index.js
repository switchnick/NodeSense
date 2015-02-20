var express = require('express');
var qlikauth = require('qlik-auth');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/authenticate', function(req, res){
  var profile = {
        'UserDirectory': 'QLIK',
        'UserId': 'sample',
        'Attributes': []
      }

      var options = {
       'Certificate': './client.pfx',
       'PassPhrase': ''
     }

      //Make call for ticket request
      qlikauth.requestTicket(req, res, profile, options);

});

app.listen(process.env.PORT || 3000);
