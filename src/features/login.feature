@login
Feature: User Login

  Scenario: Redirect to Atlassian login page
    When the user navigates to the login page and clicks the login button
    Then the user should be redirected to the Atlassian login page

  Scenario: Login with invalid credentials
    When the user attempts to login with invalid credentials
    Then the user should see an error message

  Scenario: Login with valid credentials
    When the user logs in with valid credentials
    Then the user should see their boards page
    And the user logs out
