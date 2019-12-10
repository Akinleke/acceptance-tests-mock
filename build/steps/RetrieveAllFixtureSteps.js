"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = __importDefault(require("../utilities/config"));
const chai_1 = require("chai");
const url = `${config_1.default.baseurl}/fixtures`;
let serviceresponse;
let fixturesReturned;
cucumber_1.Given('I have called the service to retrieve all fixtures', async function () {
    await node_fetch_1.default(url)
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
//# sourceMappingURL=RetrieveAllFixtureSteps.js.map