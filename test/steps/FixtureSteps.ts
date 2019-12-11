import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import config from "../utilities/config";
import { expect } from "chai";
import * as model from '../models/fixturemodel.json';


let url = `${config.baseurl}`;
let serviceresponse:any;
let fixturesReturned: any;
let requestBody = model;// get the request body from file

Given('I have called the service {string} to retrieve all fixtures', async function (string) {
    await fetch(`${url}${string}`)
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

Given('I have connected to the resource {string}', function (resourcepath) {
  url = `${url}${resourcepath}`;
  });  


When('I ask to create fixture with the data in file', async function () {
  await fetch(url,{method:'POST',body:`${requestBody}`})
  .then(response => response.text())
  .then(data => {      
    serviceresponse = data;
  })
  .catch((err: any) => console.log(err))    
});

Then('fixture is created', async function () {
  // Write code here that turns the phrase above into concrete actions
  expect(serviceresponse).contain("Fixture has been added");
});

When('I request the fixture details {string}', async function (string) {
  
  //await fetch(`${url}/${model.fixtureId}`)   
  await fetch(`${url}/${string}`)   
  .then((response: { json: () => void; }) => response.json())
  .then(data => {      
    serviceresponse = data;
  })
  .catch((err: any) => console.log(err))    
  });


Then('the first team has Id {string}', function (string) {     
    serviceresponse.footballFullState.teams.forEach((teams: { teamId: any; })=>{
    console.log(`got first team id as: ${teams["teamId"]}`);    
           
 })

});
