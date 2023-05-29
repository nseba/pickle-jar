Feature: Scenario outlines

  Scenario Outline: Using example values in steps
    Given a scenario outline named '<name>'
    When the outline parameter is '<parameter>'
    Then the world stores the '<name>' '<parameter>'
    And it can also be used as a docstring
    """
    <name> <parameter>
    """

    Examples:
      | name                  | parameter              |
      | scenario name         | parameter name         |
      | another scenario name | another parameter name |


  Scenario Outline: Using quoted example values in steps
    Given a scenario outline named '<name>'
    When the outline parameter is '<parameter>'
    Then the world stores the '<name>' '<parameter>'
    And it can also be used as a docstring with quotes
    """
    "<name> <parameter>"
    """

    Examples:
      | name                  | parameter              |
      | scenario name         | parameter name         |
      | another scenario name | another parameter name |
      | "quoted"              | another parameter name |