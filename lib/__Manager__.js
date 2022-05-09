const inquirer = require("inquirer");
const __Employee__ = require("./__Employee__");

class __Manager__ {
  /*(__Employee__ , __officeNum__)*/
  getName() {
    this.__Name__ = "Mike";
  }
  getRole() {
    this.__Name__ = "Miguel";
    this.__ID__ = Manager;
  }
  getOfficeNum() {
    this.__getRole__ = () => {
      console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);
    };
    this.__officeNum__ = 117;
    this.__isManager__ = () => {
      if (this.__Name__ === true) {
        console.log(`Greetings ${this.__ID__}.`);
      }
    };
    //TODO: * `getRole()`&mdash;returns `'Employee'`
  }
}

module.exports = __Manager__;
