Feature: Specs with background


  Background: The background steps are executed before each scenario or scenario outline
    Given the background initializes a counter to a value of 1

  Scenario: Increase background counter value
    Given a background counter
    When the background counter is incremented
    Then the value of the background counter is 2

  Scenario Template: When running multiple scenarios with background counter, it always runs the background first
    Given a background counter
    When the background counter is incremented
    Then the value of the background counter is 2

    Examples:
      | dummy |
      | 1     |
      | 2     |
      | 3     |