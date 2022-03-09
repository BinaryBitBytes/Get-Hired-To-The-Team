const inquirer = require('inquirer');
//!QUESTIONS
//ask the user quesitons

// manager office number

// engineer has a github

// intern has school

























//Using Contructor to create a object for team members with the following properties
//properties:

//The first class is an TeamMember parent class with the following properties and methods:

//TODO: getRole()—returns 'TeamMember'*/

function __TeamMember__(__Name__, __ID__) {
    this.__Name__ = Mike;
    this.__ID__ = Engineer;
    this.__isEngineer__ = () => {
        if (this.__Name__ === true) {
            console.log(`Greetings ${this.__ID__}.`);
        }
    }
    //TODO: * `getRole()`&mdash;returns `'Employee'`
    this.__getRole__ = () =>{console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);}
}

/*
const __Manager__ = new __TeamMember__(false, `Welcome aboard ${__TeamMember__.__Name__}! Your role in the organization is ${__ID__}.`);
console.log(__Manager__);
const __Employee__ = new __TeamMember__(false, `Welcome aboard ${__TeamMember__.__Name__}! Your role in the organization is ${__ID__}.`);
console.log(__Employee__);
const __Engineer__ = new __TeamMember__(true, `Welcome aboard ${__TeamMember__.__Name__}! Your role in the organization is ${__ID__}.`);
console.log(__Engineer__);
const __Intern__ = new __TeamMember__(false, `Welcome aboard ${__TeamMember__.__Name__}! Your role in the organization is ${__ID__}.`);
console.log(__Intern__);
*/
__Engineer__.__isEngineer__();
__Intern__.__isEngineer__();

const __WelcomeAboard__ = (__Engineer__ , __Intern__, __Employee__, __Manager__) => {
    if ( __Engineer__.__isEngineer__ === true &&  __Intern__.__isEngineer__ === true)
    console.log(`${__Engineer__.__Name__} & ${__Intern__.Name__} Welcome Abourd to the program!`); //if both engineers and interns from the __TeamMember__ parent class is called //!! if both are TRUE
}

__WelcomeAboard__(__Engineer__ , __Intern__, __Employee__, __Manager__); //welcoming the engineers and interns to the program
const _Employee_ = new __TeamMember__('Tom','__Intern__');
_Employee_.__getRole__();
//Array Prototype
const _allEmployees_ = [0,1,2,3];
_allEmployees_.forEach((num) => console.log(num));

//Creating a String Prototype
const employee = {
    //TODO: name
    name:'Will' ,
    //TODO: id
    id: __Intern__,
    //TODO : email
    email: 'WillBFly@salt.com', 
    //TODO : office Number
    officeNumber: 115,
    //TODO : github
    gitHub: 'FlapJackPackets',
    //TODO : school
    school: 'Texas Tech'
};

console.log(`${employee.name.toUpperCase()} is a ${employee.id.toUpperCase()} and
has an email of ${employee.email.toUpperCase()}.`)
//creating a constructor function using Prototyping Methods
function Employee(name, id, email,officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    if(id==__Engineer__){
        this.gitHub= gitHub;

}
const employee_one = new newEmployee('Phil', __Engineer__, 'PhilUpQwickly@salt.com', 117);
//TODO: getName()
newEmployee.prototype.getName = function () {
    console.log (`${this.name} has joined the organization.`);
};
employee_one.getName();
//TODO: getId()
newEmployee.prototype.getId = function () {
    console.log (`${this.name} is a ${this.id}.`);
};
employee_one.getId();
//TODO: getEmail()
newEmployee.prototype.getEmail = function () {
    console.log (`${this.name}, you can reach them at this email: ${this.email}.`);
};
employee_one.getEmail();}

function __ask__ () {

}