"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const node_fetch_1 = __importDefault(require("node-fetch"));
cucumber_1.Given('I have called the service', function () {
    node_fetch_1.default('http://localhost:3000/fixtures')
        .then(response => response.json())
        .then(data => {
        console.log(data);
    })
        .catch((err) => console.log(err));
});
//# sourceMappingURL=smoketesttests.js.map