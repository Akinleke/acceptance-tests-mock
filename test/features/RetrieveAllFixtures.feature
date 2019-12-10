Feature: Retrieve All Fixtures

Tests Retrieve all Fixtures

Scenario: Retrieve Fixtures
Given I have connected to the resource "/fixtures"
When I "GET" the fixtures
Then response contains "3" fixtures
And Each fixture has a fixture id

