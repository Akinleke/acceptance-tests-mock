Feature: Store New Feature

Tests Creating a Feature

Scenario: 2. Create a Fixture and Assert value of Home Team
Given I have connected to the resource "/fixture"
When I ask to create fixture with the data in file
Then fixture is created
When I request the fixture details
Then the first team has Id "HOME"
