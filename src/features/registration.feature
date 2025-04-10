@registration
Feature: User Registration

  Scenario: User completes registration with email
    Given the user is on the signup page
    When the user enters their email and clicks continue
    Then the user should be redirected to the Atlassian signup page
