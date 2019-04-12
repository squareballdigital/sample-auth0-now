var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var endOfLine = require('os').EOL;
  
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

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(`${endOfLine} Unauthorized! ${endOfLine}`);
  }
});

app.get('/', function (req, res) {
  res.send(`${endOfLine} Token is validated. Access Granted ${endOfLine} 
    `);
});

module.exports = app



