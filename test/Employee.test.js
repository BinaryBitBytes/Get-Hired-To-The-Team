// This is a gucci comment about importing the employee class from the library folder and the file __Employee__.js

const __Employee__ = require('../lib/__Employee__.js');

describe('describing the employee', () => {
    const nameTest = "Waldo";
    const roleTest = "Manager";
    const emailTest = "Waldo@man.com";
    const employeeTest = new __Employee__(nameTest, 1 ,emailTest, roleTest);

    it('employees name', () => {
        expect(new nameTest).toBe(employeeTest.__Name__);
        console.log(`The employees name is ${nameTest}.`);
        if(__Employee__.__Name__ == nameTest ){
            console.log('The employee does have a passing name.')
        } else ('The employee does not have a name')
    });

    it('employees role', () => {
        expect(new roleTest).toBe(employeeTest.__getRole__);
        console.log(`The employees role is ${roleTest}.`);
        if( __Employee__.__getRole__ == roleTest){
            console.log('The employee does have a passing role')
        } else ('The employee does not have a role.' )
    });

    it('employees email', () =>{
        expect(new emailTest).toBe(employeeTest.__Email__);
        console.log(`The employees email is ${emailTest}.`);
        if( __Employee__.__Email__ == emailTest ){
            console.log('The employee does have a passing email.')
        } else ('The employee does not have a email.')
    });
});
