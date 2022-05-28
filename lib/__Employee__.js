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
    function quit() {
        console.log("\n CYA!!");
        process.exit(0);
      }

inquirer.registerPrompt("loop", require("inquirer"));


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

module.exports = __Employee__;