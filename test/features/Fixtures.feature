Feature: Retrieve All Fixtures

Tests Retrieve all Fixtures

Scenario: 1. Retrieve Fixtures
Given I have called the service "/fixtures" to retrieve all fixtures
Then response contains 3 fixtures
And Each fixture has a fixture id

Scenario: 2. Create a Fixture and Assert value of Home Team
Given I have connected to the resource "/fixture"
When I ask to create fixture with id "9" using model in file
Then fixture is created
When I request the fixture details "3"
Then the first team has Id "HOME"

# Scenario: 3. Latency Tests
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with id "9" using model in file
# Then fixture is created
#When  I wait for "10" seconds
# When I request the fixture details for id "9"
# Then the fixture is returned

# Scenario: 4. Latency Tests
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with id "10" using model in file
# Then fixture is created
#When  I wait for "10" seconds
# When I request the fixture details for id "10"
# Then the fixture is returned
#When I ask to delete the feature "10"
#And I get the list of features
#Then the feature "10" no longer exists
