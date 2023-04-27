# Solidity Project Template
This package provides a simple project template, created to quickly start new Solidity projects.

Here is  an explanation on how to configure this project template, and a quick guide on how to use it.

## Before you begin
First of all, please be sure that `npm` is installed on your computer, or [install it](https://www.npmjs.com/get-npm).

We use [Truffle](https://github.com/trufflesuite) and [Solhint](https://github.com/protofire/solhint) to facilitate the development of our projects. If you don't have them yet, we recommend you to install them globally:

    npm install -g truffle
    npm install -g solhint

*Note: MacOS users may need to run these commands starting with `sudo`, for example: `sudo npm install -g truffle`.*

Also, [Infura](https://infura.io/) is used to migrate our contracts on the Ropsten network or the Live network. Don't forget to create your own account for future deployments.

## Project overview

### `contracts` folder
You should put all your contracts (`.sol` files) in this folder. At this point, the `contracts` folder has 3 files:

- `Template.sol`: Just a basic contract as an example
- `.solhint.json`: This is our [Solhint](https://github.com/protofire/solhint) configuration file, we'll talk about this later
- `Migrations.sol`: This file helps us to migrate our contracts. Warning: **DO NOT** delete it!

### `migrations` folder
The `migrations` folder contains 2 files: `1_initial_migration.js` and `2_deploy_contracts.js`. We will configure the second one later.

### `test` folder
All our tests will go in the `test` folder. As an example, we created a `template.test.js` file.

### `truffle.js` file
This file contains all the configuration related to our Truffle project. We already configured this file, but we'll talk later about some possible tweaks. Also, if you want to learn more about it, you can read [this page](https://truffleframework.com/docs/advanced/configuration).

## Installation
### Clone the project template
The first thing to do is to clone this repository:

    git clone solidity-project-template my-project


Then, change the current working directory to your project and install all the dependencies:

    cd my-project
    npm install

We decided to include the following packages in our project template:

 - [Dotenv](https://github.com/motdotla/dotenv): to use environment variables
 - [Open Zeppelin Solidity](https://github.com/OpenZeppelin/openzeppelin-solidity): very useful (and tested) Solidity libraries
 - [Truffle Hdwallet Provider](https://github.com/trufflesuite/truffle-hdwallet-provider): to sign transactions for addresses derived from a 12-word mnemonic (useful to deploy our contracts)

### Configure the `package.json` file
The `package.json` (and `package-lock.json`) file contains all the information about your project, such as the name, the author, etc. Don't forget to change them!

### Setup our environment variables
We use [Dotenv](https://github.com/motdotla/dotenv) in this project to protect our [Infura](https://infura.io/) API key and our mnemonic. The first thing you need to do is to create a `.env` file at the root of your project directory and include the following:

    MNEMONIC=MY_MNEMONIC
    INFURA=MY_INFURA_API_KEY
Once it's done, these values will be available in your project with `process.env.MNEMONIC` and `process.env.INFURA`. For example, we use these values in the `truffle.json` file to deploy our contracts to the Ropsten network or to the Live network.

*Note: We added the `.env` file to our `.gitignore`, please be sure to **NEVER** commit this file.*

*Note 2: Infura API key is only needed if you plan on deploying on networks such as Mainnet, Ropsten, Kovan, ...*

### `truffle.json` configuration
This file contains all the parameters related our Truffle project (migration, test, solc, ...). We already configure it to suit our needs, so you don't have to change it!

If you want to learn more about this file, you can go [here](https://truffleframework.com/docs/advanced/configuration).

### Create your migration
You will find a `2_deploy_contracts.js` file in the `migrations` folder. You will need to edit the first line of this file to add the name of your contract:

    const Contract = artifacts.require("MyAwesomeContract");

### Optional: Install a *personal* blockchain

A personal blockchain is the best tool to create and test smart contracts. We suggest you to install [Ganache](https://github.com/trufflesuite/ganache) or [Ganache CLI](https://github.com/trufflesuite/ganache-cli) (recommended)  on your computer.

You may need to edit the `truffle.js` file and change the following parameters in the `network: { development: { ...` part:

 - **Host:** the IP address where your personal blockchain is hosted (typically `127.0.0.1`)
 - **Port**: by default, Ganache is configured to run on port `7545`, but we decided to change it to `8545`, to use it with [MetaMask](https://metamask.io/)
 - **Gas / Gas price**: following your needs

*Note: We encourage you to read [Ganache CLI](https://github.com/trufflesuite/ganache-cli) documentation, as useful options exist, such as the custom mnemonic or the persistant blockchain.*

### Optional: Configure your linter
As said earlier, we included [Solhint](https://github.com/protofire/solhint) in this project. The best way to experience it is to use an [IDE integration](https://github.com/protofire/solhint).
Then, you change the `.solhint.json` as you wish.

*Note: We setup a custom rule in our config file to change indentation to 2 spaces instead of 4.*

## Life of your project
This is a **quick** and **incomplete** guide about a Truffle project. If you want more information, you should take a look at the [Truffle documentation](https://truffleframework.com/docs).

### Testing
If you already have a personal blockchain, tests can be run simply with `truffle test` or `npm test`. Additionally, you can run a specific file `truffle test ./test/my.test.js`.

*Note: Tests can be written using [Javascript](https://truffleframework.com/docs/getting_started/javascript-tests) or [Solidity](https://truffleframework.com/docs/getting_started/solidity-tests), and should be stored in the `test` folder.*

### Compiling
To compile your project, simply use `truffle compile`. Additionally, you are able to change the Solidity compiler options, as mentioned [here](https://truffleframework.com/docs/advanced/configuration#networks). We already turn the optimization option on.

### Deploying
First of all, make sure that you have specified your Infura API key in the `.env` file. Then, you should change the **gas** and the **gasPrice** parameters in the `truffle.js` file.

The last thing to do is to deploy on the desired network with `truffle migrate --network development` or `truffle migrate --network live`.

*Note: The name of the networks (and the networks themselves) can be changed in the `truffle.js` file. Also, to learn more about the configuration file, you can go [read this page](https://truffleframework.com/docs/advanced/configuration#networks).*

## Further reading

 - [Truffle Framework documentation](https://truffleframework.com/docs)
 - [Open Zeppelin documentation](https://openzeppelin.org/api/docs/open-zeppelin.html)
 - [Solidity documentation](http://solidity.readthedocs.io/en/v0.4.24/)
 - [Infura documentation](https://infura.io/docs)
