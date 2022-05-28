//Importing employee model
const __Employee__ = require("./lib/__Employee__");
// Initialize the inquirer object with inquirer for
// asking employee questions to new employees
let EMPLOYEE = {
  //TODO: name
  name: "Will",
  //TODO: id
  id: __Intern__,
  //TODO : email
  email: "WillBFly@salt.com",
  //TODO : office Number
  officeNumber: 115,
  //TODO : github
  gitHub: "FlapJackPackets",
  //TODO : school
  school: "Texas Tech",
};
const employee = new EMPLOYEE();
const engineer = new Engineer();
const intern = new Intern();
const manager = new Manager();
//Start asking
__Employee__.hire();

//Original code below, might be in wrong file here
const inquirer = require("inquirer");
//might migrate this code to other files
const fs = require("fs");
const __Engineer__ = require("./lib/__Engineer__");
const __Intern__ = require("./lib/__Intern__");
const __Manager__ = require("./lib/__Manager__");
const genHtmlPage = require("../src/genHtmlPage");
const Start = require("./lib/__Employee__");
//!QUESTIONS
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer.prompt({
  type: "loop",
  name: "Employees",
  message:
    "Answer the prompts based on your role that is worthy to the organization",
  QUESTION: [
    {
      type: "input",
      name: "__ID__",
      choice: [__Employee__, __Engineer__, __Manager__, __Intern__],
      message: "What is your identity in the company?",
    },
    {
      type: "input",
      name: "__Name__",
      message: "What is your name budd-eh?",
    },
  ],
});

//!ask the manager quesitons
const __Manager__QUESTIONS = [
  //!what is the managers NAME?
  {
    type: "input",
    name: "__MANAGER____NAME__",
    message: "Enter the managers name",
  },
  //!what is the managers ID?
  {
    type: "input",
    name: "__MANAGER____ID__",
    message: "The Manager ID is: ",
  },
  //!what is the managers EMAIL?
  {
    type: "input",
    name: "__MANAGER____EMAIL__",
    message: "The managers EMAIL is:",
  },
  //!what is the managers OFFICE NUMBER?
  {
    type: "number",
    name: "__MANAGER__",
    message: "What is the Managers OFFICE NUMBER?",
  },
];



//TODO: getRole()—returns 'TeamMember'*/

function __TeamMember__(__Name__, __ID__) {
  this.__Name__ = Mike;
  this.__ID__ = Engineer;
  this.__isEngineer__ = () => {
    if (this.__Name__ === true) {
      console.log(`Greetings ${this.__ID__}.`);
    }
  };
  //TODO: * `getRole()`&mdash;returns `'Employee'`
  this.__getRole__ = () => {
    console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);
  };
}
__Engineer__.__isEngineer__();
__Intern__.__isEngineer__();

const __WelcomeAboard__ = (
  __Engineer__,
  __Intern__,
  __Employee__,
  __Manager__
  ) => {
    if (
    __Engineer__.__isEngineer__ === true &&
    __Intern__.__isEngineer__ === true
    )
    console.log(
      `${__Engineer__.__Name__} & ${__Intern__.Name__} Welcome Abourd to the program!`
    ); //if both engineers and interns from the __TeamMember__ parent class is called //!! if both are TRUE
};

__WelcomeAboard__(__Engineer__, __Intern__, __Employee__, __Manager__); //welcoming the engineers and interns to the program
const _Employee_ = new __TeamMember__("Tom", "__Intern__");
_Employee_.__getRole__();
//Array Prototype
const _allEmployees_ = [0, 1, 2, 3];
_allEmployees_.forEach((num) => console.log(num));

//Creating a String Prototype

console.log(`${employee.name.toUpperCase()} is a ${employee.id.toUpperCase()} and
has an email of ${employee.email.toUpperCase()}.`);
//creating a constructor function using Prototyping Methods
function Employee(name, id, email, officeNumber) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  if (id == __Engineer__) {
    this.gitHub = gitHub;
  }
  const employee_one = new newEmployee(
    "Phil",
    __Engineer__,
    "PhilUpQwickly@salt.com",
    117
    );
    //TODO: getName()
    newEmployee.prototype.getName = function () {
      console.log(`${this.name} has joined the organization.`);
    };
    employee_one.getName();
    //TODO: getId()
  newEmployee.prototype.getId = function () {
    console.log(`${this.name} is a ${this.id}.`);
  };
  employee_one.getId();
  //TODO: getEmail()
  newEmployee.prototype.getEmail = function () {
    console.log(
      `${this.name}, you can reach them at this email: ${this.email}.`
      );
    };
    employee_one.getEmail();
  }
  
  const init = () => {
    prompt()
    .then((response) =>fs.writeFileSync('index.html', genHtmlPage(response)) )
    .then(() =>console.log('Successfully wrote to index.html'))
  .catch((error) => console.error(error));
};

init();

__ask__ = () => __Manager__QUESTIONS;

const start = new Start(__ask__)

start.play(start);

// Start hiring
employee.play();
engineer.play();
intern.play();
manager.play();
