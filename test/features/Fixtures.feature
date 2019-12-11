Feature: Test Fixtures Service

4 scenarios testing the service

# Scenario: 1. Retrieve Fixtures
# Given I have called the service "/fixtures" to retrieve all fixtures
# Then response contains 3 fixtures
# And Each fixture has a fixture id

# Scenario: 2. Create a Fixture and Assert value of Home Team
# Given I ask to create fixture with id "19" using model in file
# Then fixture is created
# When I request the fixture details "19"
# Then the first team has Id "HOME"

# Scenario: 3. Latency Test
# Given I ask to create fixture with id "15" using model in file
# Then fixture is created
# When I request the fixture details "15"
# Then the fixture "15" is returned

Scenario: 4. Deletion Test
Given I ask to create fixture with id "16" using model in file
Then fixture is created
When I request the fixture details "16"
Then the fixture "16" is returned
When I ask to delete the feature "16"
When I have called the service "/fixtures" to retrieve all fixtures
Then the feature "16" no longer exists
