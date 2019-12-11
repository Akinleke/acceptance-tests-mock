Feature: Retrieve All Fixtures

Tests Retrieve all Fixtures

Scenario: 1. Retrieve Fixtures
Given I have called the service "/fixtures" to retrieve all fixtures
Then response contains 3 fixtures
And Each fixture has a fixture id

Scenario: 2. Create a Fixture and Assert value of Home Team
Given I have connected to the resource "/fixture"
When I ask to create fixture with the data in file
Then fixture is created
When I request the fixture details "3"
Then the first team has Id "HOME"

# Scenario Outline: 3. Create a fixture and Check it retrieves
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with the data below
# Then fixture is created
# When I request the fixture details
# Then the first team has Id "<id>"
# Examples:
# | Home Team    | Away Team | id  |
# | Manchester   | Crewe     | home|

# Scenario Outline: 4. Create a fixture and Check it retrieves
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with the data below
# Then fixture is created
# When I request the fixture details
# Then the first team has Id "<id>"
# Examples:
# | Home Team    | Away Team | id  |
# | Manchester   | Crewe     | home|
