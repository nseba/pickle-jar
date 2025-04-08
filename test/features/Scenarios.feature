Feature: Running scenarios

    Scenario: Simple scenario execution
        Given a simple text
        When running the test framework
        Then no error should be reported

    Scenario: Extracting arguments from the step
        Given the foo word
        When running the test framework
        Then the given argument should be 'foo'

    Scenario: Using arguments and doc string arguments
        Given the 'input.txt' file with contents:
            """
            contents
            """
        When running the test framework
        Then the 'input.txt' file should contain 'contents'

    Scenario: Using multiline docstrings
        Given the input string:
            """
            first line
            second line
            """
        When running the test framework
        Then the output string is:
            """
            first line
            second line
            """

    Scenario: Using multiline docstrings with backticks
        Given the input string:
            ```
            first line
            second line
            ```
        When running the test framework
        Then the output string is:
            """
            first line
            second line
            """

    Scenario: Using multiple steps
        Given a first step
            And given a second step
        When running the test framework
            And when using two steps
        Then the first step ran
            And the second step ran
            But the third step didn't run

    Scenario: Using docstrings with file type
        Given the input string:
            """yaml
            item:
            key: value
            """
        When running the test framework
        Then the output string is:
            """
            item:
            key: value
            """