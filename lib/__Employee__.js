function __Employee__(__Name__, __ID__, __Email__, __getRole__) {
    this.__Name__ = Mike;
    this.__ID__ = Engineer;
    this.__Email__ = 'abc@salt.com';
    this.__isEngineer__ = () => {
        if (this.__Name__ === true) {
            console.log(`Greetings ${this.__ID__}.`);
        }
    }
    //TODO: * `getRole()`&mdash;returns `'Employee'`
    this.__getRole__ = () =>{console.log(`Hello. I am ${this.__Name__} and my role ${this.__ID__}`);}
}

//! rewriting __Employee__ as a class with a constructor which is the ABSTRACT CLASS
class __Employee__ {
    constructor (){
    //TODO: name
        this.name='Will';
    }
    //TODO: id
    id() {
        this.id= __Intern__;
    }
    //TODO : email
    email() {
        this.email= 'WillBFly@salt.com';
    } 
    //TODO : office Number
    officeNumber() {
        this.officeNumber= 115;
    }
    //TODO : github
    gitHub() {
        this.gitHub = 'FlapJackPackets';
    }
    //TODO : school
    school() {
        this.school= 'Texas Tech';
    }
    }


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
    
module.exports = __Employee__;