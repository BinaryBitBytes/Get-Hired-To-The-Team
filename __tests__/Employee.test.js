// This is a gucci comment about importing the employee class from the library folder and the file __Employee__.js
const __Employee__ = require('../lib/__Employee__.js');

describe('describing the employee', () => {
    const nameTest = "Waldo";
    const roleTest = "Manager";
    const emailTest = "Waldo@man.com";
    const employeeTest = new __Employee__(nameTest, 1 ,emailTest, roleTest);

    it('employees name', () => {
        console.log(`The employees name is ${nameTest}.`);
        if(__Employee__.__Name__ == nameTest ){
            console.log('The employee does have a passing name.')
        } else ('The employee does not have a name')
    });

    it('employees role', () => {
        console.log(`The employees role is ${roleTest}.`);
        if( __Employee__.__getRole__ == roleTest){
            console.log('The employee does have a passing role')
        } else ('The employee does not have a role.' )
    });

    it('employees email', () =>{
        console.log(`The employees email is ${emailTest}.`);
        if( __Employee__.__Email__ == emailTest ){
            console.log('The employee does have a passing email.')
        } else ('The employee does not have a email.')
    });
});






//const __Employee__ = require('../lib/__Employee__.js');
//import { TestWatcher } from "jest";
/*import {__Employee__ } from "'../lib/__Employee__.js'"; // importing a function from a  file

test(//!"write in a statement about a test here, as a arroy of data objects to test.",
    ()=>{
        //arrange a test
        const input = [ //creating a const value for object array
            {name:"name1", jobTitle:"employee1"},
            {name:"name2", jobTitle:"employee2"},
            {name:"name3", jobTitle:"employee3"}
        ]
        const expectedOutput = ["name1","name2","name3"]

        //act on the test
        const actualValue = nameExtractor(input);

        //assertion  and MATCHER functions
        //! .toBeDefined()--> verify a variable is not UNDEFINED *usually checked first*
        //! .toEqual()-->deep equality comparitson
        //! .toBe()--> simple data types for equality
        //! .toBeTruthy()--> used to verify is true or is false
        //! .not --> verif if another matcher has an opposite result is true
        //! .toContain()--> verify that an item contains an array and that if some items are not in array
        expect(actualValue).toEqual(expectedOutput){

        }
    }); */