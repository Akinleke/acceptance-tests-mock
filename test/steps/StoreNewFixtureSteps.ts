import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import * as model from '../models/fixturemodel.json';
import config from "../utilities/config";
import { expect } from "chai";

const url = `${config.baseurl}`;
let serviceresponse:any;
let fixturesReturned: any;
let requestBody = model;

Given('I have connected to the resource {string}', async function (resourcepath) {
    await fetch(`${url}${resourcepath}`,{method:'POST',body:`${requestBody}`})
    .then(response => response.json())
    .then(data => {      
      serviceresponse = data;
    })
    .catch((err: any) => console.log(err))
    });  


  When('I ask to create fixture with the data below', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });


  Then('fixture is created', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });



  When('I request the fixture details', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('the first team has Id {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });