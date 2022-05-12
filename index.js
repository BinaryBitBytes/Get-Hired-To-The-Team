const Employee = require("./lib/__Employee__");
const Engineer = require("./lib/__Engineer__");
const Intern = require("./lib/__Intern__");
const Manager = require("./lib/__Manager__");

// Initialize a new Game object
const employee = new Employee();
const engineer = new Engineer();
const intern = new Intern();
const manager = new Manager();

// Start hiring
employee.play();
engineer.play();
intern.play();
manager.play();
