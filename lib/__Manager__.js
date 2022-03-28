const inquirer = require('inquirer');
const __Employee__ = require('./__Employee__');

function __Manager__(__Employee__ , __officeNum__) {
    this.__Name__ = Mike;
    this.__ID__ = Manager;
    this.__officeNum__ = 117;
    this.__isManager__ = () => {
        if (this.__Name__ === true) {
            console.log(`Greetings ${this.__ID__}.`);
        }
    }
    //TODO: * `getRole()`&mdash;returns `'Employee'`
    this.__getRole__ = () =>{console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);}
    
}

module.exports = __Manager__;