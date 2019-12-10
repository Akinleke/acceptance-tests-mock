import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import config from "../utilities/config";
import { expect } from "chai";

const url = `${config.baseurl}/fixtures`;
let serviceresponse:any;
let fixturesReturned: any;

Given('I have called the service to retrieve all fixtures', async function () {
    await fetch(url)
    .then((response: { json: () => void; }) => response.json())
    .then(data => {      
      serviceresponse = data;
      console.log(serviceresponse);
    })
    .catch((err: any) => console.log(err))
    });
    
Then('response contains {int} fixtures', function (numberofFixturesExpected:any) {
    fixturesReturned = serviceresponse.length;// get the number of fixtures returned  
    expect(fixturesReturned).to.be.equal(numberofFixturesExpected);// check that the number of fixtures is as expected
        
      });
    
Then('Each fixture has a fixture id', function () {
    serviceresponse.forEach((fixture: { fixtureId: any; })=>{
       console.log(`got fixture id as: ${fixture.fixtureId}`);
        expect(fixture.fixtureId).not.to.be.null;//check that each fixture has an id
        
    })
});

