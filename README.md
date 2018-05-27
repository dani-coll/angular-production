# Angular-Production
Github user search engine
## Setup Tools
    - Nodejs (v8) https://nodejs.org/en/
    - Google Chrome https://www.google.com/chrome/
### Recommended 
    - Git bash
    - VSCode
## Local Development Setup Steps
- Open a terminal and execute `npm install` and `npm run start` commands on the client folder
- Open another terminal and execute `npm install` and `npm run dev` command on the server folder

## Deployment steps

First of all, check the tests to make sure nothing broke
- Execute `npm run test` command on the client folder to check the unit tests
- Execute `npm run e2e` command on the client folder to check the end to end tests
Now build the deployment package
- Execute `npm run build` command on the client folder
- Execute `npm run build` command on the server folder

Your app is now ready to be deployed to a production environment
Finally push the deployment code to the remote server environment
`
    git subtree push --prefix server heroku master
`

## Browser support
- IE 11
- Mozilla Firefox
- Google Chrome
- Microsoft Edge
