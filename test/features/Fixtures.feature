Feature: Retrieve All Fixtures

Tests Retrieve all Fixtures

# Scenario: 1. Retrieve Fixtures
# Given I have called the service "/fixtures" to retrieve all fixtures
# Then response contains 3 fixtures
# And Each fixture has a fixture id

Scenario: 2. Create a Fixture and Assert value of Home Team
Given I ask to create fixture with id "9" using model in file
Then fixture is created
When I request the fixture details "3"
Then the first team has Id "HOME"

# Scenario: 3. Latency Test
# Given I ask to create fixture with id "10" using model in file
# Then fixture is created
# When I request the fixture details "10"
# Then the fixture "10" is returned

# Scenario: 4. Deletion Test
# Given I ask to create fixture with id "11" using model in file
# Then fixture is created
# When I request the fixture details "11"
# Then the fixture "10" is returned
# When I ask to delete the feature "11"
# When I have called the service "/fixtures" to retrieve all fixtures
# Then the feature "10" no longer exists
