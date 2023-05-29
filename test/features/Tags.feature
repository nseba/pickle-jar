Feature: Using tags
  # the steps for this scenario are not defined since the skip tag will make sure the scenario doesn't run at all
  @skip
  Scenario: Skip scenario
    Given a scenario with skip tag
    When a tagged scenario that excludes the skip tag
    Then the test doesn't run
