Feature: Latency Feature

 Test Latency of the Service

# Scenario Outline: Create a fixture and Check it retrieves
# Given I have connected to the resource "/fixtures"
# When I ask to create fixture with the data below
# Then fixture is created
# When I request the fixture details
# Then the first team has Id "<id>"
# Examples:
# | Home Team    | Away Team | id  |
# | Manchester   | Crewe     | home|