const __MANAGER__ = require('../lib/__Manager__');

describe('describing the manager', () => {
    const testOfficeNumber = 117;
    const testRole = 'Manager';
    const managerTest = new __MANAGER__('Tyson', 2, testOfficeNumber, testRole);
    It('managers office number', () => {
        console.log(`The managers office number is ${testOfficeNumber}`);
        if(){

        } else()
    });

    it('managers role', () =>{
        console.log(`The role of this employee is ${testRole}`);
        if(){

        } else ('The managers role is invalid')
    });
});
//TODO: officeNumber

//TODO: getRole()—overridden to return 'Manager'
