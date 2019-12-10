Feature: Store New Feature

Tests Creating a Feature

Scenario Outline: Create a Fixture and Assert value of Home Team
Given I have connected to the resource "/fixtures"
When I ask to create fixture with the data below
Then fixture is created
When I request the fixture details
Then the first team has Id "<id>"
Examples:
| Home Team | Away Team | id  |
| Arsenal   | Burnley   | home|