/**
 * @dev We use a fixed version of Solidity
 */
pragma solidity 0.4.24;

/**
 * @dev SafeMath lib is used to prevent any overflow
 */
import "openzeppelin-solidity/contracts/math/SafeMath.sol";


/**
 * @title Template contract
 * @notice In this contract, we create a 'number' variable with a 'set' and a 'get' function
 * @dev A basic contract to illustrate our Solidity template project
 * @dev Solhint is used as a syntax guideline
 */
contract Template {
  /**
   * @dev SafeMath is used for uint256
   * @dev Don't forget to remplace '+' / '-' / '*' / '/' with SafeMaths functions
   */
  using SafeMath for uint256;

  /**
   * @dev Our 'number' variable
   */
  uint public number = 0;

  /**
   * @dev We emit an event when 'number' is changed
   */
  event NumberHasChanged(uint newNumber);

  /**
   * @notice Changes the number
   * @dev This function is public and emits an event
   * @param newNumber The new value of number, as an int
   */
  function setNumber(uint newNumber) public {
    number = newNumber;

    emit NumberHasChanged(newNumber);
  }

  /**
   * @notice Returns the 'number' variable
   * @dev This function is public
   * @return number The value of number, as an int
   */
  function getNumber() public view returns (uint) {
    return number;
  }
}
