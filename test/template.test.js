const Template = artifacts.require('Template');

contract('Template', (accounts) => {
  let template;
  let newNumber = 1103;

  it('Should get the value of the number variable', () => {
    return Template.deployed().then((instance) => {
      template = instance;
      return template.setNumber(newNumber);
    })
      .then(() => template.getNumber.call())
      .then((number) => {
        assert.equal(number, newNumber, 'Number was not changed.');
      });
  });
});
