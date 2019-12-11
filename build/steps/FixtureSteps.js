"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = __importDefault(require("../utilities/config"));
const chai_1 = require("chai");
const model = __importStar(require("../models/fixturemodel.json"));
let url = `${config_1.default.baseurl}`;
let serviceresponse;
let fixturesReturned;
let requestBody = model; // get the request body from file
cucumber_1.Given('I have called the service {string} to retrieve all fixtures', async function (string) {
    await node_fetch_1.default(`${url}${string}`)
        .then((response) => response.json())
        .then(data => {
        serviceresponse = data;
        console.log(serviceresponse);
    })
        .catch((err) => console.log(err));
});
cucumber_1.Then('response contains {int} fixtures', function (numberofFixturesExpected) {
    fixturesReturned = serviceresponse.length; // get the number of fixtures returned  
    chai_1.expect(fixturesReturned).to.be.equal(numberofFixturesExpected); // check that the number of fixtures is as expected
});
cucumber_1.Then('Each fixture has a fixture id', function () {
    serviceresponse.forEach((fixture) => {
        console.log(`got fixture id as: ${fixture.fixtureId}`);
        chai_1.expect(fixture.fixtureId).not.to.be.null; //check that each fixture has an id
    });
});
cucumber_1.Given('I have connected to the resource {string}', function (resourcepath) {
    url = `${url}${resourcepath}`;
});
cucumber_1.When('I ask to create fixture with the data in file', async function () {
    await node_fetch_1.default(url, { method: 'POST', body: `${requestBody}` })
        .then(response => response.text())
        .then(data => {
        serviceresponse = data;
    })
        .catch((err) => console.log(err));
});
cucumber_1.Then('fixture is created', async function () {
    // Write code here that turns the phrase above into concrete actions
    chai_1.expect(serviceresponse).contain("Fixture has been added");
});
cucumber_1.When('I request the fixture details {string}', async function (string) {
    //await fetch(`${url}/${model.fixtureId}`)   
    await node_fetch_1.default(`${url}/${string}`)
        .then((response) => response.json())
        .then(data => {
        serviceresponse = data;
    })
        .catch((err) => console.log(err));
});
cucumber_1.Then('the first team has Id {string}', function (string) {
    serviceresponse.footballFullState.teams.forEach((teams) => {
        console.log(`got first team id as: ${teams["teamId"]}`);
    });
});
//# sourceMappingURL=FixtureSteps.js.map