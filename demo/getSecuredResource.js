const axios = require('axios')
const args = require('minimist')(process.argv.slice(2))
const accessToken = args['accessToken']

const options = {
   headers: {
      "Authorization" : `Bearer ${accessToken}`
    }
}

axios.get('https://auth0-sb.now.sh', options)
.then((res) => console.log(res.data))
.catch((e) => console.log(e.response.data))


