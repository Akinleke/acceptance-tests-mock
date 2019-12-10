Feature: Retrieve All Fixtures

Tests Retrieve all Fixtures

Scenario: Retrieve Fixtures
Given I have called the service
When I check the fixtures
Then response contains 3 fixtures
# And Each fixture has a fixture id

