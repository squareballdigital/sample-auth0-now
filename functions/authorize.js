var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

console.log('this is a test')
  
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://yaratest.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'https://yara-m2m',
  issuer: "https://yaratest.eu.auth0.com/",
  algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/', function (req, res) {
  res.send('Secured Resource');
});

module.exports = app



