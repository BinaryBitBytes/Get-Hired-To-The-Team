const inquirer = require('inquirer');
const __Employee__ = require('./__Employee__')

function __Intern__(__Name__, __ID__,__School__,__Email__,__getRole__) {
    this.__getRole__ = __Intern__;
    this.__Name__ = Mike;
    this.__ID__ = Intern;
    this.__School__ = 'Texas Tech';
    this.__Email__= "Mike@mike.mil";
    this.__isIntern__ = () => {
        if (this.__Name__ === true) {
            console.log(`Greetings ${this.__ID__}.`);
        }
    }
//! rewriting __Intern__ as a class with a constructor
class __Intern__ {
    constructor(){

    }
}
    //TODO: * `getRole()`&mdash;returns `'Employee'`
    this.__getRole__ = () =>{console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);}
}

module.exports = __Intern__;