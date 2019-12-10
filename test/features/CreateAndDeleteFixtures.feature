Feature: Create and Delete Feature
To test we can create and delete features

# Scenario Outline: Create a Feature and Delete it
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with the data below
# Then fixture is created
# When I request the fixture details
# Then the first team has Id "<id>"
# Examples:
# | Home Team    | Away Team | id  |
# | Real Madrid  | Barcelona | home|