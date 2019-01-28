const { parse } = require('url')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { name = 'Alan' } = query
  res.end(`Hello ${name}!`)
}