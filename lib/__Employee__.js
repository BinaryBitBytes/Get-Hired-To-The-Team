//added inquirer dependancy
const inquirer = require("inquirer");
const __Engineer__ = require("./__Engineer__");
const __Manager__ = require("./__Manager__");
const __Intern__ = require("./__Intern__");

class __Employee__ {
    //! constructor before first method
    constructor(__Name__, __ID__, __Email__, __getRole__) {
        this.__Name__ = __Name__;
        this.__ID__ = __ID__;
        this.__Email__ = __Email__;
    }
    
    
    getName(){
        this.name = new __Name__;
    }
        //TODO: * `getRole()`&mdash;returns `'Employee'`
    
    
    hire() {
        this.__Name__ = new this.getName();
        this.getId();
    }
    //!sets up employee id
    getId() {
        this.__ID__ = new this.getId();
        this.getEmail();
    }
    //!sets up employee email
    getEmail() {
        this.__Email__ = new this.getEmail("bill@salt.com");
        this.getRole();
    }
    //!sets up employee role
    getRole() {
        this.email.then(() => {
        if (this.email == true) {
            console.log('the email was accepted with an input of"' +
             this.__Employee__
            +'"\n'
            );
        } else if  (this.__Employee__.__Manager__.getOfficeNum() == true){
            __Manager__.getOfficeNum();
            getRole();
        } else if  (this.__Employee__.__Engineer__.__gitHub__() == true){

        } else {
            this.getName = new this.getName('Wilson');
            this.getId = new this.getId();
            this.getEmail = new this.getEmail();
            


        }
        })
    }
}
    //     this.__ID__=
    //     this.name = new Name(__Name__);
    //     this.__ID__ = __Manager__;
    //     this.__getRole__ = () => {console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`); };
    // };
    function quit() {
        console.log("\n CYA!!");
        process.exit(0);
      }

inquirer.registerPrompt("loop", require("inquirer"));

// inquirer.prompt({
//   type: "loop",
//   name: "Employees",
//   message:
//     "Answer the prompts based on your role that is worthy to the organization",
//   QUESTION: [
//     {
//       type: "__ID__",
//       choice: [__Employee__, __Engineer__, __Manager__, __Intern__],
//       message: "What is your identity in the company?",
//     },
//     {
//       type: "__Name__",
//       name: "BBB",
//       message: "What is your name budd-eh?",
//     },
//   ],
// });


//!ask the manager quesitons
function askNewHire() {
    inquirer
    .prompt (
        [
            //!what is the managers NAME?
            {
                type: "input",
                name: "",
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
        ]
        )
        .then(val => {
            if (val.choice){
                this.hire();
            } else {
                quit();
            }
        });
    };
askNewHire();
    
    
/*const employee = {  WE WILL BE DECLARING THIS AS AN OBJECT NOT A CLASS
    THIS WOULD RESULT IN AN ERROR AS SINGULARITY
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
};*/
/*
function Employee(name, id, email,officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    if(id==__Engineer__){
        this.gitHub= gitHub;
    }
    const __Employee__ = new newEmployee('Phil', __Engineer__, 'PhilUpQwickly@salt.com', 117);
}
*/
module.exports = __Employee__;