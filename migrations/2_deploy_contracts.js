const Contract = artifacts.require("Template");

module.exports = function(deployer) {
  deployer.deploy(Contract);
};
