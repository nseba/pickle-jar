Feature: Using tags
  # the steps for this scenario are not defined since the skip tag will make sure the scenario doesn't run at all
  @skip
  Scenario: Skip scenario
    Given a scenario with skip tag
    When a tagged scenario that excludes the skip tag
    Then the test doesn't run

  Scenario: Non skip scenario execution
    Given a simple text
    When running the test framework
    Then no error should be reported

  Scenario: Using todo and fail
    Given a simple text
    When running the test framework
    @todo
    Then this should be implemented sometime in the future
    @fail
    And the test doesn't run

  @skip
  Feature: Using tags for features

  Scenario: Skip scenario
    Given a scenario with skip tag
    When a tagged scenario that excludes the skip tag
    Then the test doesn't run

  Scenario: Secondary skip
    Given a simple text
    When running the test framework
    Then the test doesn't run

