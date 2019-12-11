"use strict";
const reporter = require("cucumber-html-reporter");
let date = new Date();
let options = {
    jsonFile: "test\\report\\cucumber_report.json",
    output: "test\\report\\cucumber_report.html",
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        Company: "Leke Ibiyode",
        Date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        Executed: "Remote",
        Parallel: "Scenarios",
        Platform: "Windows 10",
        Squad: "MS1",
        "Test Environment": "STAGING",
        Time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    reportSuiteAsScenarios: true,
    theme: "bootstrap"
};
reporter.generate(options);
//# sourceMappingURL=index.js.map