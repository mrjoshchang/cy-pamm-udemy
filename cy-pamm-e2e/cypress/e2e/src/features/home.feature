Feature: home page

    @regression
    Scenario: Verify buttons on home page
        Given I am on the "home" page
        Then the "primary header" should contain the text "Welcome to Cypress (PAMM) Udemy Course"
        And the "1st" "paragraph" should contain the text "Let's create an awesome E2E testing framework!"
        And the "1st" "nav link item" should contain the text "Home"
        And the "1st" "nav link item" should have the "href" attribute value "/"
        And the "2nd" "nav link item" should contain the text "Playground"
        And the "2nd" "nav link item" should have the "href" attribute value "/playground"
        And the "3rd" "nav link item" should contain the text "About"
        And the "3rd" "nav link item" should have the "href" attribute value "/about"
        And the "4th" "nav link item" should contain the text "Contact"
        And the "4th" "nav link item" should have the "href" attribute value "/contact"
