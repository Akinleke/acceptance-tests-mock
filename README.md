# acceptance-tests-mock
acceptance tests for mock service


#Folder Structure

test
---features
	|-Fixtures.feature
---models
	|-fixturemodel.json
---steps
	|-FixtureSteps.ts
---report
	|-
---utilities
	-config.ts

#BDD Styled test design has been adopted
1. Navigate to the "acceptance-tests-mock" folder 
2. Run "npm install" from command line
3. Run "npm test" to run all the scenarios in the Fixtures.feature
4. IF DESIRED Run "npm run-script test-report" to run all the scenarios and generate a json report in the reportfolder

#useful information
1. Scenario 1 asserts there are 3 fixtures this is the default behaviour of service so the data file for the api must have only 3 records as per question if any create step is run before this the test will fail
2. fixturemodel.json is the json model used for the post steps, the fixture id is programmatically set on the fly before posting to the service.
3. config.ts is the config file for the base url of localhost:3000 if the service being tested runs on another port this must be changed
