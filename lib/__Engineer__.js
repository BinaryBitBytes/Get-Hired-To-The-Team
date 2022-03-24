const inquirer = require('inquirer');

function __Engineer__(__Name__, __ID__) {
    this.__Name__ = Mike;
    this.__ID__ = Engineer;
    this.__officeNum__ = 117;
    this.__gitHub__ = 'bbb';
    this.__isEngineer__ = () => {
        if (this.__Name__ === true) {
            console.log(`Greetings ${this.__ID__}.`);
        }
    }
//! rewriting __Engineer__ as a class with a constructor

    //TODO: * `getRole()`&mdash;returns `'Employee'`
    this.__getRole__ = () =>{
        console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);}
    this.__gitHub__ = () =>{

    }
}


module.exports = __Engineer__;