import { describe } from "sequelize/types/query-types";
const __Intern__ = require('../lib/__Intern__.js');

describe('describing the intern', () =>{
    const schoolTest = 'Virginia Tech';
    const internTest = new __Intern__('Mike', 1, schoolTest, 'Mike@mike.mil');
    expect(internTest.__School__).toBe(schoolTest);
    it('interns school', () => {
        if (__Intern__.__School == null){
            console.log('No input received for interns school, FAIL.');
        } else return;
    });

    it('interns role', () => {
        if(__Intern__.__getRole__){
            console.log('No input received for interns role, FAIL.');
        } else return;
    });
});


/*
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

*/