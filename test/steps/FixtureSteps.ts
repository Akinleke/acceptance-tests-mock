import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import config from "../utilities/config";
import { expect } from "chai";
import * as model from '../models/fixturemodel.json';


let url = `${config.baseurl}`;
let serviceresponse:any;
let fixturesReturned: any;
const requestBody = model;// get the request body from file

Given('I have called the service {string} to retrieve all fixtures',{timeout:10000}, async function (resourcepath :string) {
    await fetch(`${config.baseurl}${resourcepath}`)
    .then((response: { json: () => void; }) => response.json())
    .then(data => {      
      serviceresponse = data;      
    })
    .catch((err: any) => {
      expect.fail({message:"unexpected response test failed"})
    })
});
    
Then('response contains {int} fixtures', function (numberofFixturesExpected:any) {
    fixturesReturned = serviceresponse.length;// get the number of fixtures returned  
    expect(fixturesReturned).to.be.equal(numberofFixturesExpected,"mismatch in number of fixtures");// check that the number of fixtures is as expected
});
    
Then('Each fixture has a fixture id', function () {
    serviceresponse.forEach((fixture: { fixtureId: any; })=>{
       console.log(`got fixture id as: ${fixture.fixtureId}`);
        expect(fixture.fixtureId).not.to.be.null;//check that each fixture has an id
        
    })
});

Given('I ask to create fixture with id {string} using model in file',{timeout:10000}, async function (fixtureId:any) {
  url = `${config.baseurl}/fixture`;
  requestBody.fixtureId = fixtureId;
  await fetch(url,{method:'post',body:`${JSON.stringify(requestBody)}`,
  headers:{'Content-Type':'application/json'}, 
  })
  .then(response => response.text())
  .then(data => {      
    serviceresponse = data;
  })
  .catch((err: any) => {
    expect.fail({message:"unexpected response test failed"})
  })   
});

Then('fixture is created', async function () {  
  expect(serviceresponse).contain("Fixture has been added");
});

When('I request the fixture details {string}',{timeout:10000}, async function (fixtureId:string) {  
  await fetch(`${url}/${fixtureId}`)   
  .then((response: { json: () => void; }) => response.json())
  .then(data => {      
    serviceresponse = data;    
  })
  .catch((err: any) => {
    expect.fail({message:"unexpected response test failed"})
  })   
});

Then('the first team has Id {string}', function (teamId:string) {     
    expect(serviceresponse.footballFullState.teams[0].teamId).to.be.equal(teamId,"Team Id doesnt match");
});

Then('the fixture {string} is returned', function (returnedfixture:string) {
  expect(serviceresponse.fixtureId).to.be.equal(returnedfixture,"fixture not found");  
});

When('I ask to delete the feature {string}',{timeout:10000}, async function (toDelete:any) {
  url = `${config.baseurl}/fixture/${toDelete}`; 
  await fetch(url,{method:'delete'})
  .then(response => response.text())
  .then(data => {      
    serviceresponse = data;  
    expect(serviceresponse).to.contain("Fixture has been deleted");
  })
  .catch((err: any) => {
    expect.fail({message:"unexpected response test failed"})
  })   
  
});

Then('the feature {string} no longer exists', function (deleted:string) {
  serviceresponse.forEach((fixture: { fixtureId: any; })=>{
    console.log(`got fixture id as: ${fixture.fixtureId}`);
     expect(fixture.fixtureId).not.to.be.equal(deleted);//check that each fixture has an id     
 })
});
