function __Employee__(__Name__, __ID__) {
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

function Employee(name, id, email,officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    if(id==__Engineer__){
        this.gitHub= gitHub;
    }
    const employee_one = new newEmployee('Phil', __Engineer__, 'PhilUpQwickly@salt.com', 117);
    
module.exports = __Employee__;