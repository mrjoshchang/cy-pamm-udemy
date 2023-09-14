Feature: World

    @regression
    Scenario: easy maths
        Given a variable set to 1
        When I increment the variable by 6
        Then the variable should contain 7
        And I decrement the variable by 10
        And the variable should contain -3

