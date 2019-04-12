# sample-auth0-now
Sample M2M Authorization demonstration using Auth0 and Zeit Now to deploy a serverless node function. 
The secured endpoint can be found in `functions/authorize.js`

## Demo Instructions

### Install dependencies

`yarn install`

### Go to demo directory 

`cd demo`

### To attempt unauthorized access to the secured endpoint

run `node getSecuredResource.js`

### To obtain a valid accessToken

run `node requestAccessToken.js`

### To attempt authorized access to the secured endpoint

run `node getSecuredResource --accessToken={YOUR_ACCESS_TOKEN}`


## Deploy Instructions

### Make sure you have `now` installed

run `yarn global add now`

### Deploy an isolated instacnce

run `now`

### To deploy to the production namespace (https://auth0-sb.now.sh)

run `now --target production`

### To switch what profile you are deploying with

run `now switch`
