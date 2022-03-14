const inquirer = require('inquirer');
//!QUESTIONS
//inquirer.registerPrompt("loop" , require("inquirer-loop")(inquirer));

inquirer.prompt(
    {
    type:"loop",
    name:"Employees",
    message:"Answer the prompts based on your role that is worthy to the organization",
    QUESTION:[
        {
            //type: '__ID__' ,
            type: 'list' ,
            choice:[ __Employee__ , __Engineer__ , __Manager__ , __Intern__],
            message: "What is your identity in the company?"
        },
        {
            type: '__Name__',
            name: 'BBB',
            message: 'What is your name budd-eh?'
        },
            ],
    }
                );