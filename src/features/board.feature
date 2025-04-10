@board
Feature: Board Management

  Background:
    Given I am logged into Trello

  Scenario: Create a new board
    When I create a board named "Example"
    Then I should see the board displayed

  Scenario: Delete an existing board
    When I delete the board named "Example"
    Then I should not see the board named "Example"
