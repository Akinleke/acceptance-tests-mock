import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import config from "../utilities/config";
import { expect } from "chai";

const url = `${config.baseurl}/fixtures`;
let serviceresponse:any;
let fixturesReturned: any;

Given('I have called the service', async function () {
    await fetch(url)
    .then(response => response.json())
    .then(data => {      
      serviceresponse = data;
    })
    .catch((err: any) => console.log(err))
    });

When('I check the fixtures', async function () {
    
    fixturesReturned = serviceresponse.length;    
    });
    
Then('response contains {int} fixtures', function (numberoffixtures:any) {
    expect(fixturesReturned).to.be.equal(numberoffixtures);
        //console.log(serviceresponse.length);
      });