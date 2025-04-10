@profile
Feature: Edit Profile

  Background:
    Given the user is logged into Trello

  Scenario: User updates their profile name
    When the user updates their profile name
    Then the URL should contain the updated username
