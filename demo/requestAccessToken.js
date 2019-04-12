var request = require("request");

var options = { method: 'POST',
  url: 'https://yaratest.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'client_credentials',
     client_id: 'BmRSOtSJYn35HR75F1rID0RP3Q2RQxmk',
     client_secret: 'Qf8av3eGhLvfyEapqEzC5nlP-iLWm28RUkc-FJ7hC38PAIjXPGxsLhabiNOHVANf',
     audience: 'https://yara-m2m' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});