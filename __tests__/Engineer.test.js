const { INET } = require('sequelize/types');
const { DESCRIBE } = require('sequelize/types/query-types');
const __Employee__ = require('../lib/__Employee__');
const __Engineer__ = require('../lib__Engineer__');

DESCRIBE('describing the engineer', () => {
    const testGitHub = 'SolvingProblems';
    const engineerTest = new __Engineer__('Tom',1, testGitHub, 'tom@tom.biz');
    expect(engineerTest.__gitHub__).toBe(testGitHub);
    it('engineer github', () => {
        if (__Engineer__.__gitHub__ == null){
            console.log('No input received, FAIL.');
        } else if (__Engineer__.gitHub == testGitHub){
            console.log(`The engineer github is showing ${testGitHub}`);
        } else{
            console.log('The engineer is not showing the proper github for the test.')
        }
    });
});

