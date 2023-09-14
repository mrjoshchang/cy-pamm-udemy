Feature: Buttons

    @regression
    Scenario: Button that navigates home
        Given I am on the "playground" page
        And I click the "Buttons" link
        And I am directed to the "playground/buttons" page
        When I click the "Go home" button
        And I am directed to the "home" page

    @regression
    Scenario: Disabled button
        Given I am on the "playground" page
        And I click the "Buttons" link
        And I am directed to the "playground/buttons" page
        And the "Disabled" button should not be enabled

    @regression
    Scenario: Double click button
        Given I am on the "playground" page
        And I click the "Buttons" link
        And I am directed to the "playground/buttons" page
        And I double-click the "Double Click!" button
        And the "Double Click response" should contain the text "Did you double click?"

    @regression
    Scenario: button indexes
        Given I am on the "playground" page
        And I click the "Buttons" link
        And I am directed to the "playground/buttons" page
        And I click the "1st" "button" button
        And I am directed to the "home" page
