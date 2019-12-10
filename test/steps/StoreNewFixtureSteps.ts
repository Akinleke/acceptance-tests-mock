import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import * as model from '../models/fixturemodel.json';
import config from "../utilities/config";
import { expect } from "chai";


let url = `${config.baseurl}`;
let serviceresponse:any;
let fixturesReturned: any;

let requestBody = model;// get the request body from file

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

  When('I request the fixture details', async function () {
    
    await fetch(`${url}/${model.fixtureId}`)   
    //await fetch(`${url}/3`)   
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