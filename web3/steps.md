
https://thirdweb.com/explore

 ## Back End smart contract

### To begin thridweb project 

`npx thirdweb@latest create --contract`

### install dotenv

`npm install dotenv`

### Rename the contract name to

`CrowdFunding.sol`

### setup metamask if dont have 

### create env file and add 

`PRIVATE_KEY="key from your metamask"`

### configure hardhat.config.js with defaultnetwork and test network details

### complete the contract code 

### Create an New API key from thrid web

### To deploy contract 
`npm run deploy`

provide secret key

### environment varialbe was not getting detected so replace directly and try ( PRIVATE_KEY)

accounts=[0xremainingprivatekey]

### It generates a link to deploy the contracts in thridweb proceed and deploy


#### after deployment it will create a new folder artifacts-zk check artifacts-zk/contracts/crowdFunding.json for ABI and byetcode.

### Open code snippets of thridweb.com and your contract 
you can observe how to use your contract and call functions
 in different languages

 ## Back End smart contract is completed succesfully

## React Fron End

`cd client`

`npx thirdweb create --app`

select for projectname : ./
       for blockchain : EVM
       for framwork : Vite
       for language : JavaScript


## install react-router-dom

`npm install react-router-dom`

## Delete the entire src folder and work from scratch

## As we cant see sepolia chainid go to the Enum of ChainID and add sepolia chain id

## create main.jsx and App.jsx 

## install tailwind css 

https://tailwindcss.com/docs/guides/vite

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

## add content details in tailwind.config.js

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

## create index.css and add 

@tailwind base;
@tailwind components;
@tailwind utilities;


## create assets folder and add necessary files

## create constants folder and index.js and add navigation links there

## create components , context , pages , utils folders

common functions are added in index.js file inside utils folder


## main.jsx should be configured according to the test net 

 `<ThirdwebProvider activeChain={ Sepolia } desiredChainId={Sepolia.chainId}>`


## For Deploying 

cd client

npm run build

you will get dist folder 

Drag and drop into netlify it will deploy it automatically




