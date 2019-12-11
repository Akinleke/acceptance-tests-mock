"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model = __importStar(require("../models/fixturemodel.json"));
const config_1 = __importDefault(require("../utilities/config"));
let url = `${config_1.default.baseurl}`;
let serviceresponse;
let fixturesReturned;
let requestBody = model; // get the request body from file
// Given('I have connected to the resource {string}', function (resourcepath) {
//     url = `${url}${resourcepath}`;
//     });  
//   When('I ask to create fixture with the data in file', async function () {
//     await fetch(url,{method:'POST',body:`${requestBody}`})
//     .then(response => response.text())
//     .then(data => {      
//       serviceresponse = data;
//     })
//     .catch((err: any) => console.log(err))    
//   });
//   Then('fixture is created', async function () {
//     // Write code here that turns the phrase above into concrete actions
//     expect(serviceresponse).contain("Fixture has been added");
//   });
//   When('I request the fixture details', async function () {
//     await fetch(`${url}/${model.fixtureId}`)   
//     //await fetch(`${url}/3`)   
//     .then((response: { json: () => void; }) => response.json())
//     .then(data => {      
//       serviceresponse = data;
//     })
//     .catch((err: any) => console.log(err))    
//     });
//   Then('the first team has Id {string}', function (string) {     
//       serviceresponse.footballFullState.teams.forEach((teams: { teamId: any; })=>{
//       console.log(`got first team id as: ${teams["teamId"]}`);    
//    })
//   });
//# sourceMappingURL=StoreNewFixtureSteps.js.map