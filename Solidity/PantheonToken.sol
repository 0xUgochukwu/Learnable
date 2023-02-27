// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract PantheonToken {
    string public name = "Pantheon Token"; // token name
    string public symbol = "PNT"; // token symbol
    uint256 public totalSupply = 1000000; // total supply of tokens
    uint8 public decimals = 18; // number of decimal places for token
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor() {
        // send all token supply to the contract creator
        balanceOf[msg.sender] = totalSupply * (10 ** decimals);
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Not enough balance to transfer");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[_from] >= _value, "Not enough balance to transfer");
        require(allowance[_from][msg.sender] >= _value, "Not enough allowance to transfer");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}
